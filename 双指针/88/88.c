void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n){
    int p1 = nums1Size - 1;
    int pm = m - 1;
    int pn = n - 1;
    while(pm >= 0 && pn >= 0) {
        int vm = nums1[pm];
        int vn = nums2[pn];
        if (vm > vn) {
            nums1[p1] = vm;
            pm --;
        } else {
            nums1[p1] = vn;
            pn --;
        }
        p1 --;
    }
    if (pn >= 0) {
        for (int i = 0; i <= pn ; i ++) {
            nums1[i] = nums2[i];
        }
    }
}