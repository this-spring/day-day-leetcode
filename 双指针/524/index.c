int CMP(void *a, void *b)
{
    char *aa = *(char**)a;
    char *bb = *(char**)b;
    if (strlen(aa) != strlen(bb)) {
        return strlen(bb) - strlen(aa);
    }
    return strcmp(aa, bb);
}

char * findLongestWord(char * s, char ** dictionary, int dictionarySize){
    qsort(dictionary, dictionarySize, sizeof(char *), CMP);
    int len1 = strlen(s);
    int i = 0;
    while (i < dictionarySize) {
        int index1 = 0;
        int index2 = 0;
        int len2 = strlen(dictionary[i]);
        while (index2 < len2 && index1 < len1) {
            if (s[index1] == dictionary[i][index2]) {
                index2++;
            }
            index1++;
        }
        if (index2 == len2) {
            char *res = (char*)calloc(1, strlen(dictionary[i]) + 1);
            strcpy(res, dictionary[i]);
            return res;
        }
        i++;
    }
    return "";
}