
const grindData = [
    {grind: "Extra Fine", microns: 8, kUltra: "0.0.1", c40: "", kMax: "0.0.1", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 15, kUltra: "0.0.2", c40: "", kMax: "0.0.2", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 23, kUltra: "0.0.3", c40: "1", kMax: "0.0.3", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 30, kUltra: "0.0.4", c40: "", kMax: "0.0.4", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 38, kUltra: "0.0.5", c40: "", kMax: "0.0.5", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 46, kUltra: "0.0.6", c40: "2", kMax: "0.0.6", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 53, kUltra: "0.0.7", c40: "", kMax: "0.0.7", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 61, kUltra: "0.0.8", c40: "", kMax: "0.0.8", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 68, kUltra: "0.0.9", c40: "", kMax: "0.0.9", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 76, kUltra: "0.1.0", c40: "3", kMax: "0.1.0", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 84, kUltra: "0.1.1", c40: "", kMax: "", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 91, kUltra: "0.1.2", c40: "", kMax: "0.1.1", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 99, kUltra: "0.1.3", c40: "4", kMax: "0.1.2", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 107, kUltra: "0.1.4", c40: "", kMax: "0.1.3", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 114, kUltra: "0.1.5", c40: "", kMax: "0.1.4", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 122, kUltra: "0.1.6", c40: "", kMax: "0.1.5", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 129, kUltra: "0.1.7", c40: "5", kMax: "0.1.6", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 137, kUltra: "0.1.8", c40: "", kMax: "0.1.7", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 145, kUltra: "0.1.9", c40: "", kMax: "0.1.8", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 152, kUltra: "0.2.0", c40: "6", kMax: "0.1.9", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 160, kUltra: "0.2.1", c40: "", kMax: "0.2.0", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 167, kUltra: "0.2.2", c40: "", kMax: "0.2.1", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 175, kUltra: "0.2.3", c40: "", kMax: "0.2.2", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 183, kUltra: "0.2.4", c40: "7", kMax: "0.2.3", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 190, kUltra: "0.2.5", c40: "", kMax: "0.2.4", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Fine", microns: 198, kUltra: "0.2.6", c40: "", kMax: "0.2.5", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 205, kUltra: "0.2.7", c40: "8", kMax: "0.2.6", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 213, kUltra: "0.2.8", c40: "", kMax: "0.2.7", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 221, kUltra: "0.2.9", c40: "", kMax: "", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 228, kUltra: "0.3.0", c40: "", kMax: "0.2.8", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 236, kUltra: "0.3.1", c40: "9", kMax: "0.2.9", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 243, kUltra: "0.3.2", c40: "", kMax: "0.3.0", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 251, kUltra: "0.3.3", c40: "", kMax: "0.3.1", zp6: "0.0.1", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 259, kUltra: "0.3.4", c40: "", kMax: "0.3.2", zp6: "0.0.2", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 266, kUltra: "0.3.5", c40: "10", kMax: "0.3.3", zp6: "0.0.3", ode: "", ode2: "1", encore: "1"},
    {grind: "Fine", microns: 274, kUltra: "0.3.6", c40: "", kMax: "0.3.4", zp6: "0.0.4", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 282, kUltra: "0.3.7", c40: "", kMax: "0.3.5", zp6: "0.0.5", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 289, kUltra: "0.3.8", c40: "11", kMax: "0.3.6", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 297, kUltra: "0.3.9", c40: "", kMax: "0.3.7", zp6: "0.0.6", ode: "", ode2: "1.1", encore: "2"},
    {grind: "Fine", microns: 304, kUltra: "0.4.0", c40: "", kMax: "0.3.8", zp6: "0.0.7", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 312, kUltra: "0.4.1", c40: "", kMax: "0.3.9", zp6: "0.0.8", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 320, kUltra: "0.4.2", c40: "12", kMax: "0.4.0", zp6: "0.0.9", ode: "", ode2: "1.2", encore: "3"},
    {grind: "Fine", microns: 327, kUltra: "0.4.3", c40: "", kMax: "0.4.1", zp6: "0.1.0", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 335, kUltra: "0.4.4", c40: "", kMax: "0.4.2", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 342, kUltra: "0.4.5", c40: "13", kMax: "0.4.3", zp6: "0.1.1", ode: "", ode2: "", encore: "4"},
    {grind: "Fine", microns: 350, kUltra: "0.4.6", c40: "", kMax: "0.4.4", zp6: "0.1.2", ode: "", ode2: "2", encore: ""},
    {grind: "Fine", microns: 358, kUltra: "0.4.7", c40: "", kMax: "0.4.5", zp6: "0.1.3", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 365, kUltra: "0.4.8", c40: "", kMax: "", zp6: "0.1.4", ode: "", ode2: "", encore: "5"},
    {grind: "Fine", microns: 373, kUltra: "0.4.9", c40: "14", kMax: "0.4.6", zp6: "0.1.5", ode: "", ode2: "", encore: ""},
    {grind: "Fine", microns: 380, kUltra: "0.5.0", c40: "", kMax: "0.4.7", zp6: "", ode: "", ode2: "2.1", encore: ""},
    {grind: "Fine", microns: 388, kUltra: "0.5.1", c40: "", kMax: "0.4.8", zp6: "0.1.6", ode: "", ode2: "", encore: "6"},
    {grind: "Fine", microns: 396, kUltra: "0.5.2", c40: "15", kMax: "0.4.9", zp6: "0.1.7", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 403, kUltra: "0.5.3", c40: "", kMax: "0.5.0", zp6: "0.1.8", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 411, kUltra: "0.5.4", c40: "", kMax: "0.5.1", zp6: "0.1.9", ode: "", ode2: "2.2", encore: "7"},
    {grind: "Medium Fine", microns: 418, kUltra: "0.5.5", c40: "", kMax: "0.5.2", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 426, kUltra: "0.5.6", c40: "16", kMax: "0.5.3", zp6: "0.2.0", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 434, kUltra: "0.5.7", c40: "", kMax: "0.5.4", zp6: "0.2.1", ode: "", ode2: "", encore: "8"},
    {grind: "Medium Fine", microns: 441, kUltra: "0.5.8", c40: "", kMax: "0.5.5", zp6: "0.2.2", ode: "", ode2: "3", encore: ""},
    {grind: "Medium Fine", microns: 449, kUltra: "0.5.9", c40: "", kMax: "0.5.6", zp6: "0.2.3", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 457, kUltra: "0.6.0", c40: "17", kMax: "0.5.7", zp6: "0.2.4", ode: "", ode2: "", encore: "9"},
    {grind: "Medium Fine", microns: 464, kUltra: "0.6.1", c40: "", kMax: "0.5.8", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 472, kUltra: "0.6.2", c40: "", kMax: "0.5.9", zp6: "0.2.5", ode: "", ode2: "3.1", encore: ""},
    {grind: "Medium Fine", microns: 479, kUltra: "0.6.3", c40: "18", kMax: "0.6.0", zp6: "0.2.6", ode: "", ode2: "", encore: "10"},
    {grind: "Medium Fine", microns: 487, kUltra: "0.6.4", c40: "", kMax: "0.6.1", zp6: "0.2.7", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 495, kUltra: "0.6.5", c40: "", kMax: "0.6.2", zp6: "0.2.8", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 502, kUltra: "0.6.6", c40: "", kMax: "", zp6: "0.2.9", ode: "", ode2: "3.2", encore: ""},
    {grind: "Medium Fine", microns: 510, kUltra: "0.6.7", c40: "19", kMax: "0.6.3", zp6: "", ode: "", ode2: "", encore: "11"},
    {grind: "Medium Fine", microns: 517, kUltra: "0.6.8", c40: "", kMax: "0.6.4", zp6: "0.3.0", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 525, kUltra: "0.6.9", c40: "", kMax: "0.6.5", zp6: "0.3.1", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 533, kUltra: "0.7.0", c40: "", kMax: "0.6.6", zp6: "0.3.2", ode: "", ode2: "4", encore: "12"},
    {grind: "Medium Fine", microns: 540, kUltra: "0.7.1", c40: "20", kMax: "0.6.7", zp6: "0.3.3", ode: "1", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 548, kUltra: "0.7.2", c40: "", kMax: "0.6.8", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 555, kUltra: "0.7.3", c40: "", kMax: "0.6.9", zp6: "0.3.4", ode: "", ode2: "", encore: "13"},
    {grind: "Medium Fine", microns: 563, kUltra: "0.7.4", c40: "21", kMax: "0.7.0", zp6: "0.3.5", ode: "", ode2: "4.1", encore: ""},
    {grind: "Medium Fine", microns: 571, kUltra: "0.7.5", c40: "", kMax: "0.7.1", zp6: "0.3.6", ode: "1.1", ode2: "", encore: ""},
    {grind: "Medium Fine", microns: 578, kUltra: "0.7.6", c40: "", kMax: "0.7.2", zp6: "0.3.7", ode: "", ode2: "", encore: "14"},
    {grind: "Medium Fine", microns: 586, kUltra: "0.7.7", c40: "", kMax: "0.7.3", zp6: "0.3.8", ode: "", ode2: "4.2", encore: ""},
    {grind: "Medium Fine", microns: 593, kUltra: "0.7.8", c40: "22", kMax: "0.7.4", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 601, kUltra: "0.7.9", c40: "", kMax: "0.7.5", zp6: "0.3.9", ode: "1.2", ode2: "", encore: "15"},
    {grind: "Medium", microns: 609, kUltra: "0.8.0", c40: "", kMax: "0.7.6", zp6: "0.4.0", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 616, kUltra: "0.8.1", c40: "23", kMax: "0.7.7", zp6: "0.4.1", ode: "", ode2: "5", encore: ""},
    {grind: "Medium", microns: 624, kUltra: "0.8.2", c40: "", kMax: "0.7.8", zp6: "0.4.2", ode: "2", ode2: "", encore: "16"},
    {grind: "Medium", microns: 632, kUltra: "0.8.3", c40: "", kMax: "0.7.9", zp6: "0.4.3", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 639, kUltra: "0.8.4", c40: "", kMax: "", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 647, kUltra: "0.8.5", c40: "24", kMax: "0.8.0", zp6: "0.4.4", ode: "", ode2: "5.1", encore: "17"},
    {grind: "Medium", microns: 654, kUltra: "0.8.6", c40: "", kMax: "0.8.1", zp6: "0.4.5", ode: "2.1", ode2: "", encore: ""},
    {grind: "Medium", microns: 662, kUltra: "0.8.7", c40: "", kMax: "0.8.2", zp6: "0.4.6", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 670, kUltra: "0.8.8", c40: "", kMax: "0.8.3", zp6: "0.4.7", ode: "", ode2: "", encore: "18"},
    {grind: "Medium", microns: 677, kUltra: "0.8.9", c40: "25", kMax: "0.8.4", zp6: "0.4.8", ode: "", ode2: "5.2", encore: ""},
    {grind: "Medium", microns: 685, kUltra: "0.9.0", c40: "", kMax: "0.8.5", zp6: "", ode: "2.2", ode2: "", encore: ""},
    {grind: "Medium", microns: 692, kUltra: "0.9.1", c40: "", kMax: "0.8.6", zp6: "0.4.9", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 700, kUltra: "0.9.2", c40: "26", kMax: "0.8.7", zp6: "0.5.0", ode: "", ode2: "", encore: "19"},
    {grind: "Medium", microns: 708, kUltra: "0.9.3", c40: "", kMax: "0.8.8", zp6: "0.5.1", ode: "3", ode2: "6", encore: ""},
    {grind: "Medium", microns: 715, kUltra: "0.9.4", c40: "", kMax: "0.8.9", zp6: "0.5.2", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 723, kUltra: "0.9.5", c40: "", kMax: "0.9.0", zp6: "", ode: "", ode2: "", encore: "20"},
    {grind: "Medium", microns: 730, kUltra: "0.9.6", c40: "27", kMax: "0.9.1", zp6: "0.5.3", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 738, kUltra: "0.9.7", c40: "", kMax: "0.9.2", zp6: "0.5.4", ode: "3.1", ode2: "6.1", encore: ""},
    {grind: "Medium", microns: 746, kUltra: "0.9.8", c40: "", kMax: "0.9.3", zp6: "0.5.5", ode: "", ode2: "", encore: "21"},
    {grind: "Medium", microns: 753, kUltra: "0.9.9", c40: "28", kMax: "0.9.4", zp6: "0.5.6", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 761, kUltra: "1.0.0", c40: "", kMax: "0.9.5", zp6: "0.5.7", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 768, kUltra: "1.0.1", c40: "", kMax: "0.9.6", zp6: "", ode: "3.2", ode2: "6.2", encore: "22"},
    {grind: "Medium", microns: 776, kUltra: "1.0.2", c40: "", kMax: "", zp6: "0.5.8", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 784, kUltra: "1.0.3", c40: "29", kMax: "0.9.7", zp6: "0.5.9", ode: "", ode2: "", encore: ""},
    {grind: "Medium", microns: 791, kUltra: "1.0.4", c40: "", kMax: "0.9.8", zp6: "0.6.0", ode: "4", ode2: "", encore: "23"},
    {grind: "Medium", microns: 799, kUltra: "1.0.5", c40: "", kMax: "0.9.9", zp6: "0.6.1", ode: "", ode2: "7", encore: ""},
    {grind: "Medium Coarse", microns: 807, kUltra: "1.0.6", c40: "30", kMax: "1.0.0", zp6: "0.6.2", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 814, kUltra: "1.0.7", c40: "", kMax: "1.0.1", zp6: "", ode: "", ode2: "", encore: "24"},
    {grind: "Medium Coarse", microns: 822, kUltra: "1.0.8", c40: "", kMax: "1.0.2", zp6: "0.6.3", ode: "4.1", ode2: "7.1", encore: ""},
    {grind: "Medium Coarse", microns: 829, kUltra: "1.0.9", c40: "", kMax: "1.0.3", zp6: "0.6.4", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 837, kUltra: "1.1.0", c40: "31", kMax: "1.0.4", zp6: "0.6.5", ode: "", ode2: "", encore: "25"},
    {grind: "Medium Coarse", microns: 845, kUltra: "1.1.1", c40: "", kMax: "1.0.5", zp6: "0.6.6", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 852, kUltra: "1.1.2", c40: "", kMax: "1.0.6", zp6: "0.6.7", ode: "4.2", ode2: "7.2", encore: ""},
    {grind: "Medium Coarse", microns: 860, kUltra: "1.1.3", c40: "", kMax: "1.0.7", zp6: "", ode: "", ode2: "", encore: "26"},
    {grind: "Medium Coarse", microns: 867, kUltra: "1.1.4", c40: "32", kMax: "1.0.8", zp6: "0.6.8", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 875, kUltra: "1.1.5", c40: "", kMax: "1.0.9", zp6: "0.6.9", ode: "5", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 883, kUltra: "1.1.6", c40: "", kMax: "1.1.0", zp6: "0.7.0", ode: "", ode2: "8", encore: "27"},
    {grind: "Medium Coarse", microns: 890, kUltra: "1.1.7", c40: "33", kMax: "1.1.1", zp6: "0.7.1", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 898, kUltra: "1.1.8", c40: "", kMax: "1.1.2", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 905, kUltra: "1.1.9", c40: "", kMax: "1.1.3", zp6: "0.7.2", ode: "5.1", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 913, kUltra: "1.2.0", c40: "", kMax: "1.1.4", zp6: "0.7.3", ode: "", ode2: "8.1", encore: "28"},
    {grind: "Medium Coarse", microns: 921, kUltra: "1.2.1", c40: "34", kMax: "", zp6: "0.7.4", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 928, kUltra: "1.2.2", c40: "", kMax: "1.1.5", zp6: "0.7.5", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 936, kUltra: "1.2.3", c40: "", kMax: "1.1.6", zp6: "0.7.6", ode: "5.2", ode2: "", encore: "29"},
    {grind: "Medium Coarse", microns: 943, kUltra: "1.2.4", c40: "35", kMax: "1.1.7", zp6: "0.7.7", ode: "", ode2: "8.2", encore: ""},
    {grind: "Medium Coarse", microns: 951, kUltra: "1.2.5", c40: "", kMax: "1.1.8", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 959, kUltra: "1.2.6", c40: "", kMax: "1.1.9", zp6: "0.7.8", ode: "", ode2: "", encore: "30"},
    {grind: "Medium Coarse", microns: 966, kUltra: "1.2.7", c40: "", kMax: "1.2.0", zp6: "0.7.9", ode: "6", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 974, kUltra: "1.2.8", c40: "36", kMax: "1.2.1", zp6: "0.8.0", ode: "", ode2: "9", encore: ""},
    {grind: "Medium Coarse", microns: 982, kUltra: "1.2.9", c40: "", kMax: "1.2.2", zp6: "0.8.1", ode: "", ode2: "", encore: "31"},
    {grind: "Medium Coarse", microns: 989, kUltra: "1.3.0", c40: "", kMax: "1.2.3", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Medium Coarse", microns: 997, kUltra: "1.3.1", c40: "37", kMax: "1.2.4", zp6: "0.8.2", ode: "6.1", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1004, kUltra: "1.3.2", c40: "", kMax: "1.2.5", zp6: "0.8.3", ode: "", ode2: "9.1", encore: "32"},
    {grind: "Coarse", microns: 1012, kUltra: "1.3.3", c40: "", kMax: "1.2.6", zp6: "0.8.4", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1020, kUltra: "1.3.4", c40: "", kMax: "1.2.7", zp6: "0.8.5", ode: "6.2", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1027, kUltra: "1.3.5", c40: "38", kMax: "1.2.8", zp6: "0.8.6", ode: "", ode2: "9.2", encore: "33"},
    {grind: "Coarse", microns: 1035, kUltra: "1.3.6", c40: "", kMax: "1.2.9", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1042, kUltra: "1.3.7", c40: "", kMax: "1.3.0", zp6: "0.8.7", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1050, kUltra: "1.3.8", c40: "39", kMax: "1.3.1", zp6: "0.8.8", ode: "7", ode2: "", encore: "34"},
    {grind: "Coarse", microns: 1058, kUltra: "1.3.9", c40: "", kMax: "", zp6: "0.8.9", ode: "", ode2: "10", encore: ""},
    {grind: "Coarse", microns: 1065, kUltra: "1.4.0", c40: "", kMax: "1.3.2", zp6: "0.9.0", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1073, kUltra: "1.4.1", c40: "", kMax: "1.3.3", zp6: "", ode: "", ode2: "", encore: "35"},
    {grind: "Coarse", microns: 1080, kUltra: "1.4.2", c40: "40", kMax: "1.3.4", zp6: "0.9.1", ode: "7.1", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1088, kUltra: "1.4.3", c40: "", kMax: "1.3.5", zp6: "0.9.2", ode: "", ode2: "10.1", encore: ""},
    {grind: "Coarse", microns: 1096, kUltra: "1.4.4", c40: "", kMax: "1.3.6", zp6: "0.9.3", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1103, kUltra: "1.4.5", c40: "", kMax: "1.3.7", zp6: "0.9.4", ode: "7.2", ode2: "", encore: "36"},
    {grind: "Coarse", microns: 1111, kUltra: "1.4.6", c40: "", kMax: "1.3.8", zp6: "0.9.5", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1118, kUltra: "1.4.7", c40: "", kMax: "1.3.9", zp6: "", ode: "", ode2: "10.2", encore: ""},
    {grind: "Coarse", microns: 1126, kUltra: "1.4.8", c40: "", kMax: "1.4.0", zp6: "0.9.6", ode: "", ode2: "", encore: "37"},
    {grind: "Coarse", microns: 1134, kUltra: "1.4.9", c40: "", kMax: "1.4.1", zp6: "0.9.7", ode: "8", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1141, kUltra: "1.5.0", c40: "", kMax: "1.4.2", zp6: "0.9.8", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1149, kUltra: "1.5.1", c40: "", kMax: "1.4.3", zp6: "0.9.9", ode: "", ode2: "11", encore: "38"},
    {grind: "Coarse", microns: 1157, kUltra: "1.5.2", c40: "", kMax: "1.4.4", zp6: "1.0.0", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1164, kUltra: "1.5.3", c40: "", kMax: "1.4.5", zp6: "", ode: "8.1", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1172, kUltra: "1.5.4", c40: "", kMax: "1.4.6", zp6: "1.0.1", ode: "", ode2: "", encore: "39"},
    {grind: "Coarse", microns: 1179, kUltra: "1.5.5", c40: "", kMax: "1.4.7", zp6: "1.0.2", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1187, kUltra: "1.5.6", c40: "", kMax: "1.4.8", zp6: "1.0.3", ode: "", ode2: "", encore: ""},
    {grind: "Coarse", microns: 1195, kUltra: "1.5.7", c40: "", kMax: "1.4.9", zp6: "1.0.4", ode: "8.2", ode2: "", encore: "40"},
    {grind: "Extra Coarse", microns: 1202, kUltra: "1.5.8", c40: "", kMax: "", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1210, kUltra: "1.5.9", c40: "", kMax: "1.5.0", zp6: "1.0.5", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1217, kUltra: "1.6.0", c40: "", kMax: "1.5.1", zp6: "1.0.6", ode: "9", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1225, kUltra: "1.6.1", c40: "", kMax: "1.5.2", zp6: "1.0.7", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1233, kUltra: "1.6.2", c40: "", kMax: "1.5.3", zp6: "1.0.8", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1240, kUltra: "1.6.3", c40: "", kMax: "1.5.4", zp6: "1.0.9", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1248, kUltra: "1.6.4", c40: "", kMax: "1.5.5", zp6: "", ode: "9.1", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1255, kUltra: "1.6.5", c40: "", kMax: "1.5.6", zp6: "1.1.0", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1263, kUltra: "1.6.6", c40: "", kMax: "1.5.7", zp6: "1.1.1", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1271, kUltra: "1.6.7", c40: "", kMax: "1.5.8", zp6: "1.1.2", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1278, kUltra: "1.6.8", c40: "", kMax: "1.5.9", zp6: "1.1.3", ode: "9.2", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1286, kUltra: "1.6.9", c40: "", kMax: "1.6.0", zp6: "1.1.4", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1293, kUltra: "1.7.0", c40: "", kMax: "1.6.1", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1301, kUltra: "1.7.1", c40: "", kMax: "1.6.2", zp6: "1.1.5", ode: "10", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1309, kUltra: "1.7.2", c40: "", kMax: "1.6.3", zp6: "1.1.6", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1316, kUltra: "1.7.3", c40: "", kMax: "1.6.4", zp6: "1.1.7", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1324, kUltra: "1.7.4", c40: "", kMax: "1.6.5", zp6: "1.1.8", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1332, kUltra: "1.7.5", c40: "", kMax: "1.6.6", zp6: "1.1.9", ode: "10.1", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1339, kUltra: "1.7.6", c40: "", kMax: "1.6.7", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1347, kUltra: "1.7.7", c40: "", kMax: "", zp6: "1.2.0", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1354, kUltra: "1.7.8", c40: "", kMax: "1.6.8", zp6: "1.2.1", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1362, kUltra: "1.7.9", c40: "", kMax: "1.6.9", zp6: "1.2.2", ode: "10.2", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1370, kUltra: "1.8.0", c40: "", kMax: "1.7.0", zp6: "1.2.3", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1377, kUltra: "1.8.1", c40: "", kMax: "1.7.1", zp6: "", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1385, kUltra: "1.8.2", c40: "", kMax: "1.7.2", zp6: "1.2.4", ode: "11", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1392, kUltra: "1.8.3", c40: "", kMax: "1.7.3", zp6: "1.2.5", ode: "", ode2: "", encore: ""},
    {grind: "Extra Coarse", microns: 1400, kUltra: "1.8.4", c40: "", kMax: "1.7.4", zp6: "1.2.6", ode: "", ode2: "", encore: ""}
];

const grinders = [

    {key: 'c40', name: 'Comandante C40'},
    {key: 'kUltra', name: '1Zpresso K-Ultra'},
    {key: 'kMax', name: '1Zpresso K-Max'},
    {key: 'zp6', name: '1Zpresso ZP6 Sp.'},
    {key: 'ode', name: 'Ode'},
    {key: 'ode2', name: 'Ode 2'},
    {key: 'encore', name: 'Encore'}
];

let filteredData = [...grindData];
let selectedData = null;
let fromGrinder = null;
let toGrinder = null;

// DOM elements
const searchInput = document.getElementById('searchInput');
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const resultsSection = document.getElementById('resultsSection');
const selectedInfo = document.getElementById('selectedInfo');
const grinderGrid = document.getElementById('grinderGrid');

// Converter elements
const fromGrinderButton = document.getElementById('fromGrinderButton');
const fromGrinderMenu = document.getElementById('fromGrinderMenu');
const toGrinderButton = document.getElementById('toGrinderButton');
const toGrinderMenu = document.getElementById('toGrinderMenu');
const fromSettingInput = document.getElementById('fromSettingInput');
const converterResult = document.getElementById('converterResult');

// Initialize converter dropdowns
function populateConverterDropdowns() {
    [fromGrinderMenu, toGrinderMenu].forEach(menu => {
        menu.innerHTML = '';
        grinders.forEach(grinder => {
            const option = document.createElement('div');
            option.className = 'converter-option';
            option.textContent = grinder.name;
            option.addEventListener('click', () => {
                if (menu === fromGrinderMenu) {
                    selectFromGrinder(grinder);
                } else {
                    selectToGrinder(grinder);
                }
            });
            menu.appendChild(option);
        });
    });
}

// Select from grinder
function selectFromGrinder(grinder) {
    fromGrinder = grinder;
    const buttonSpan = fromGrinderButton.querySelector('span:first-child');
    buttonSpan.textContent = grinder.name;
    
    fromSettingInput.disabled = false;
    fromSettingInput.placeholder = `Enter ${grinder.name} setting`;
    
    toggleConverterDropdown('from', false);
    performConversion();
}

// Select to grinder
function selectToGrinder(grinder) {
    toGrinder = grinder;
    const buttonSpan = toGrinderButton.querySelector('span:first-child');
    buttonSpan.textContent = grinder.name;
    
    toggleConverterDropdown('to', false);
    performConversion();
}

// Toggle converter dropdown
function toggleConverterDropdown(type, force = null) {
    const button = type === 'from' ? fromGrinderButton : toGrinderButton;
    const menu = type === 'from' ? fromGrinderMenu : toGrinderMenu;
    const isOpen = force !== null ? force : !menu.classList.contains('show');
    const arrow = button.querySelector('.dropdown-arrow');
    
    // Close all converter dropdowns first
    [fromGrinderMenu, toGrinderMenu].forEach(m => m.classList.remove('show'));
    [fromGrinderButton, toGrinderButton].forEach(b => {
        b.classList.remove('active');
        b.querySelector('.dropdown-arrow').classList.remove('rotated');
    });
    
    if (isOpen) {
        menu.classList.add('show');
        button.classList.add('active');
        arrow.classList.add('rotated');
    }
}

// Perform conversion
function performConversion() {
    if (!fromGrinder || !toGrinder || !fromSettingInput.value.trim()) {
        converterResult.style.display = 'none';
        return;
    }

    const inputSetting = fromSettingInput.value.trim();
    
    const matchingRow = grindData.find(row => {
        const fromValue = row[fromGrinder.key];
        return fromValue && fromValue.toString() === inputSetting;
    });

    if (matchingRow) {
        const toValue = matchingRow[toGrinder.key];
        const microns = matchingRow.microns;
        const grindType = matchingRow.grind;
        
        if (toValue) {
            const resultDiv = document.querySelector('.converter-item:last-child .converter-input');
            resultDiv.textContent = toValue;
            resultDiv.style.background = 'linear-gradient(135deg, #d7940c 0%, #f4a460 100%)';
            resultDiv.style.color = '#fff8f0';
            resultDiv.style.fontWeight = '600';
            resultDiv.style.border = '2px solid #d7940c';
            
            // Show result
            converterResult.innerHTML = `
                <div class="conversion-info">${fromGrinder.name} setting "${inputSetting}" converts to:</div>
                <div class="conversion-result">${toGrinder.name}: ${toValue}</div>
                <div class="conversion-info" style="margin-top: 10px;">
                    ${grindType} grind • ~${microns} microns
                </div>
            `;
            converterResult.style.display = 'block';
        } else {
            // No results
            const resultDiv = document.querySelector('.converter-item:last-child .converter-input');
            resultDiv.textContent = 'Not available';
            resultDiv.style.background = '#3e2723';
            resultDiv.style.color = '#d7940c';
            resultDiv.style.fontWeight = '600';
            resultDiv.style.border = '2px solid #8b4513';
            
            converterResult.innerHTML = `
                <div class="conversion-info">Setting "${inputSetting}" found for ${fromGrinder.name}</div>
                <div class="conversion-result" style="color: #d7940c;">No equivalent setting available for ${toGrinder.name}</div>
                <div class="conversion-info" style="margin-top: 10px;">
                    ${grindType} grind • ~${microns} microns
                </div>
            `;
            converterResult.style.display = 'block';
        }
    } else {
        // Setting not found
        const resultDiv = document.querySelector('.converter-item:last-child .converter-input');
        resultDiv.textContent = 'Setting not found';
        resultDiv.style.background = '#3e2723';
        resultDiv.style.color = '#d7940c';
        resultDiv.style.fontWeight = '600';
        resultDiv.style.border = '2px solid #8b4513';
        
        converterResult.innerHTML = `
            <div class="conversion-result" style="color: #d7940c;">Setting "${inputSetting}" not found for ${fromGrinder.name}</div>
            <div class="conversion-info" style="margin-top: 10px;">
                Please check the setting and try again
            </div>
        `;
        converterResult.style.display = 'block';
    }
}
function populateDropdown(data = grindData) {
    dropdownMenu.innerHTML = '';
    
    data.forEach((item, index) => {
        const option = document.createElement('div');
        option.className = 'dropdown-option';
        option.innerHTML = `
            <div>
                <div>${item.microns}µm</div>
                <div class="grind-category">${item.grind}</div>
            </div>
            <div class="micron-size">${item.microns}µm</div>
        `;
        option.addEventListener('click', () => selectGrind(item, index));
        dropdownMenu.appendChild(option);
    });
}

// Filter function
function filterData(query) {
    if (!query) return grindData;
    
    const searchTerm = query.toLowerCase();
    return grindData.filter(item => 
        item.grind.toLowerCase().includes(searchTerm) ||
        item.microns.toString().includes(searchTerm) ||
        Object.values(item).some(val => 
            val && val.toString().toLowerCase().includes(searchTerm)
        )
    );
}

// Select grind function
function selectGrind(item, index) {
    selectedData = item;
    
    // Update button text
    const buttonSpan = dropdownButton.querySelector('span:first-child');
    buttonSpan.textContent = `${item.microns}µm - ${item.grind}`;
    
    // Hide dropdown
    toggleDropdown(false);
    
    // Show results
    displayResults(item);
}

// Display results
function displayResults(item) {
    // Show selected info
    selectedInfo.innerHTML = `
        <div class="selected-grind">${item.grind} - ${item.microns}µm</div>
        <div class="selected-microns">Particle size: ~${item.microns} microns</div>
    `;
    
    // Show grinder settings
    grinderGrid.innerHTML = '';
    
    grinders.forEach(grinder => {
        const setting = item[grinder.key];
        const card = document.createElement('div');
        card.className = 'grinder-card';
        
        card.innerHTML = `
            <div class="grinder-name">${grinder.name}</div>
            <div class="grinder-setting ${!setting ? 'no-setting' : ''}">
                ${setting || 'Not available'}
            </div>
        `;
        
        grinderGrid.appendChild(card);
    });
    
    resultsSection.style.display = 'block';
}

// Toggle dropdown
function toggleDropdown(force = null) {
    const isOpen = force !== null ? force : !dropdownMenu.classList.contains('show');
    const arrow = dropdownButton.querySelector('.dropdown-arrow');
    
    if (isOpen) {
        dropdownMenu.classList.add('show');
        dropdownButton.classList.add('active');
        arrow.classList.add('rotated');
    } else {
        dropdownMenu.classList.remove('show');
        dropdownButton.classList.remove('active');
        arrow.classList.remove('rotated');
    }
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    filteredData = filterData(query);
    populateDropdown(filteredData);
});

dropdownButton.addEventListener('click', () => {
    toggleDropdown();
});

// Converter event listeners
fromGrinderButton.addEventListener('click', () => {
    toggleConverterDropdown('from');
});

toGrinderButton.addEventListener('click', () => {
    toggleConverterDropdown('to');
});

fromSettingInput.addEventListener('input', () => {
    performConversion();
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.converter-dropdown')) {
        toggleDropdown(false);
        toggleConverterDropdown('from', false);
        toggleConverterDropdown('to', false);
    }
});

// Initialize
populateDropdown();
populateConverterDropdowns();
