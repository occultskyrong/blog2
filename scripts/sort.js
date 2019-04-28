function InnerArraySort(array, length, comparefn) {
    // In-place QuickSort algorithm.
    // For short (length <= 22) arrays, insertion sort is used for efficiency.
  
    if (!IS_CALLABLE(comparefn)) {
      comparefn = function (x, y) {
        if (x === y) return 0;
        if (%_IsSmi(x) && %_IsSmi(y)) {
          return %SmiLexicographicCompare(x, y);
        }
        x = TO_STRING(x);
        y = TO_STRING(y);
        if (x == y) return 0;
        else return x < y ? -1 : 1;
      };
    }
    var InsertionSort = function InsertionSort(a, from, to) {
      for (var i = from + 1; i < to; i++) {
        var element = a[i];
        for (var j = i - 1; j >= from; j--) {
          var tmp = a[j];
          var order = comparefn(tmp, element);
          if (order > 0) {
            a[j + 1] = tmp;
          } else {
            break;
          }
        }
        a[j + 1] = element;
      }
    };
  
    var GetThirdIndex = function(a, from, to) {
      var t_array = new InternalArray();
      // Use both 'from' and 'to' to determine the pivot candidates.
      var increment = 200 + ((to - from) & 15);
      var j = 0;
      from += 1;
      to -= 1;
      for (var i = from; i < to; i += increment) {
        t_array[j] = [i, a[i]];
        j++;
      }
      t_array.sort(function(a, b) {
        return comparefn(a[1], b[1]);
      });
      var third_index = t_array[t_array.length >> 1][0];
      return third_index;
    }
  
    var QuickSort = function QuickSort(a, from, to) {
      var third_index = 0;
      while (true) {
        // Insertion sort is faster for short arrays.
        if (to - from <= 10) {
          InsertionSort(a, from, to);
          return;
        }
        if (to - from > 1000) {
          third_index = GetThirdIndex(a, from, to);
        } else {
          third_index = from + ((to - from) >> 1);
        }
        // Find a pivot as the median of first, last and middle element.
        var v0 = a[from];
        var v1 = a[to - 1];
        var v2 = a[third_index];
        var c01 = comparefn(v0, v1);
        if (c01 > 0) {
          // v1 < v0, so swap them.
          var tmp = v0;
          v0 = v1;
          v1 = tmp;
        } // v0 <= v1.
        var c02 = comparefn(v0, v2);
        if (c02 >= 0) {
          // v2 <= v0 <= v1.
          var tmp = v0;
          v0 = v2;
          v2 = v1;
          v1 = tmp;
        } else {
          // v0 <= v1 && v0 < v2
          var c12 = comparefn(v1, v2);
          if (c12 > 0) {
            // v0 <= v2 < v1
            var tmp = v1;
            v1 = v2;
            v2 = tmp;
          }
        }
        // v0 <= v1 <= v2
        a[from] = v0;
        a[to - 1] = v2;
        var pivot = v1;
        var low_end = from + 1;   // Upper bound of elements lower than pivot.
        var high_start = to - 1;  // Lower bound of elements greater than pivot.
        a[third_index] = a[low_end];
        a[low_end] = pivot;
  
        // From low_end to i are elements equal to pivot.
        // From i to high_start are elements that haven't been compared yet.
        partition: for (var i = low_end + 1; i < high_start; i++) {
          var element = a[i];
          var order = comparefn(element, pivot);
          if (order < 0) {
            a[i] = a[low_end];
            a[low_end] = element;
            low_end++;
          } else if (order > 0) {
            do {
              high_start--;
              if (high_start == i) break partition;
              var top_elem = a[high_start];
              order = comparefn(top_elem, pivot);
            } while (order > 0);
            a[i] = a[high_start];
            a[high_start] = element;
            if (order < 0) {
              element = a[i];
              a[i] = a[low_end];
              a[low_end] = element;
              low_end++;
            }
          }
        }
        if (to - high_start < low_end - from) {
          QuickSort(a, high_start, to);
          to = low_end;
        } else {
          QuickSort(a, from, low_end);
          from = high_start;
        }
      }
    };
  
    // Copy elements in the range 0..length from obj's prototype chain
    // to obj itself, if obj has holes. Return one more than the maximal index
    // of a prototype property.
    var CopyFromPrototype = function CopyFromPrototype(obj, length) {
      var max = 0;
      for (var proto = %object_get_prototype_of(obj); proto;
           proto = %object_get_prototype_of(proto)) {
        var indices = IS_PROXY(proto) ? length : %GetArrayKeys(proto, length);
        if (IS_NUMBER(indices)) {
          // It's an interval.
          var proto_length = indices;
          for (var i = 0; i < proto_length; i++) {
            if (!HAS_OWN_PROPERTY(obj, i) && HAS_OWN_PROPERTY(proto, i)) {
              obj[i] = proto[i];
              if (i >= max) { max = i + 1; }
            }
          }
        } else {
          for (var i = 0; i < indices.length; i++) {
            var index = indices[i];
            if (!HAS_OWN_PROPERTY(obj, index) && HAS_OWN_PROPERTY(proto, index)) {
              obj[index] = proto[index];
              if (index >= max) { max = index + 1; }
            }
          }
        }
      }
      return max;
    };
  
    // Set a value of "undefined" on all indices in the range from..to
    // where a prototype of obj has an element. I.e., shadow all prototype
    // elements in that range.
    var ShadowPrototypeElements = function(obj, from, to) {
      for (var proto = %object_get_prototype_of(obj); proto;
           proto = %object_get_prototype_of(proto)) {
        var indices = IS_PROXY(proto) ? to : %GetArrayKeys(proto, to);
        if (IS_NUMBER(indices)) {
          // It's an interval.
          var proto_length = indices;
          for (var i = from; i < proto_length; i++) {
            if (HAS_OWN_PROPERTY(proto, i)) {
              obj[i] = UNDEFINED;
            }
          }
        } else {
          for (var i = 0; i < indices.length; i++) {
            var index = indices[i];
            if (from <= index && HAS_OWN_PROPERTY(proto, index)) {
              obj[index] = UNDEFINED;
            }
          }
        }
      }
    };
  
    var SafeRemoveArrayHoles = function SafeRemoveArrayHoles(obj) {
      // Copy defined elements from the end to fill in all holes and undefineds
      // in the beginning of the array.  Write undefineds and holes at the end
      // after loop is finished.
      var first_undefined = 0;
      var last_defined = length - 1;
      var num_holes = 0;
      while (first_undefined < last_defined) {
        // Find first undefined element.
        while (first_undefined < last_defined &&
               !IS_UNDEFINED(obj[first_undefined])) {
          first_undefined++;
        }
        // Maintain the invariant num_holes = the number of holes in the original
        // array with indices <= first_undefined or > last_defined.
        if (!HAS_OWN_PROPERTY(obj, first_undefined)) {
          num_holes++;
        }
  
        // Find last defined element.
        while (first_undefined < last_defined &&
               IS_UNDEFINED(obj[last_defined])) {
          if (!HAS_OWN_PROPERTY(obj, last_defined)) {
            num_holes++;
          }
          last_defined--;
        }
        if (first_undefined < last_defined) {
          // Fill in hole or undefined.
          obj[first_undefined] = obj[last_defined];
          obj[last_defined] = UNDEFINED;
        }
      }
      // If there were any undefineds in the entire array, first_undefined
      // points to one past the last defined element.  Make this true if
      // there were no undefineds, as well, so that first_undefined == number
      // of defined elements.
      if (!IS_UNDEFINED(obj[first_undefined])) first_undefined++;
      // Fill in the undefineds and the holes.  There may be a hole where
      // an undefined should be and vice versa.
      var i;
      for (i = first_undefined; i < length - num_holes; i++) {
        obj[i] = UNDEFINED;
      }
      for (i = length - num_holes; i < length; i++) {
        // For compatability with Webkit, do not expose elements in the prototype.
        if (i in %object_get_prototype_of(obj)) {
          obj[i] = UNDEFINED;
        } else {
          delete obj[i];
        }
      }
  
      // Return the number of defined elements.
      return first_undefined;
    };
  
    if (length < 2) return array;
  
    var is_array = IS_ARRAY(array);
    var max_prototype_element;
    if (!is_array) {
      // For compatibility with JSC, we also sort elements inherited from
      // the prototype chain on non-Array objects.
      // We do this by copying them to this object and sorting only
      // own elements. This is not very efficient, but sorting with
      // inherited elements happens very, very rarely, if at all.
      // The specification allows "implementation dependent" behavior
      // if an element on the prototype chain has an element that
      // might interact with sorting.
      max_prototype_element = CopyFromPrototype(array, length);
    }
  
    // %RemoveArrayHoles returns -1 if fast removal is not supported.
    var num_non_undefined = %RemoveArrayHoles(array, length);
  
    if (num_non_undefined == -1) {
      // There were indexed accessors in the array.
      // Move array holes and undefineds to the end using a Javascript function
      // that is safe in the presence of accessors.
      num_non_undefined = SafeRemoveArrayHoles(array);
    }
  
    QuickSort(array, 0, num_non_undefined);
  
    if (!is_array && (num_non_undefined + 1 < max_prototype_element)) {
      // For compatibility with JSC, we shadow any elements in the prototype
      // chain that has become exposed by sort moving a hole to its position.
      ShadowPrototypeElements(array, num_non_undefined, max_prototype_element);
    }
  
    return array;
  }