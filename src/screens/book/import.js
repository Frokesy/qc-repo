const zonedata = [
  {
    weight: 0.5,
    zone1: { price: 14900.91, rate: 0.25 },
    zone2: { price: 16621.01, rate: 0.25 },
    zone3: { price: 18341.09, rate: 0.25 },
    zone4: { price: 21422.91, rate: 0.25 },
    zone5: { price: 21996.27, rate: 0.25 },
    zone6: { price: 23716.35, rate: 0.25 },
    zone7: { price: 26507.44, rate: 0.25 },
    zone8: { price: 27228.19, rate: 0.25 },
  },
  {
    weight: 1,
    zone1: { price: 14966.08, rate: 0.25 },
    zone2: { price: 16686.18, rate: 0.25 },
    zone3: { price: 18406.26, rate: 0.25 },
    zone4: { price: 21488.08, rate: 0.25 },
    zone5: { price: 22061.45, rate: 0.25 },
    zone6: { price: 23781.53, rate: 0.25 },
    zone7: { price: 26998.58, rate: 0.25 },
    zone8: { price: 27293.36, rate: 0.25 },
  },
  {
    weight: 1.5,
    zone1: { price: 15031.25, rate: 0.25 },
    zone2: { price: 16751.35, rate: 0.25 },
    zone3: { price: 18471.43, rate: 0.25 },
    zone4: { price: 21553.25, rate: 0.25 },
    zone5: { price: 22126.62, rate: 0.25 },
    zone6: { price: 23846.7, rate: 0.25 },
    zone7: { price: 27489.73, rate: 0.25 },
    zone8: { price: 27358.54, rate: 0.25 },
  },
  {
    weight: 2,
    zone1: { price: 15096.43, rate: 0.25 },
    zone2: { price: 16816.52, rate: 0.25 },
    zone3: { price: 18536.6, rate: 0.25 },
    zone4: { price: 21618.42, rate: 0.25 },
    zone5: { price: 22191.79, rate: 0.25 },
    zone6: { price: 23911.87, rate: 0.25 },
    zone7: { price: 27980.87, rate: 0.25 },
    zone8: { price: 27423.71, rate: 0.25 },
  },
  {
    weight: 2.5,
    zone1: { price: 19891.84, rate: 0.25 },
    zone2: { price: 21611.92, rate: 0.25 },
    zone3: { price: 25052.1, rate: 0.25 },
    zone4: { price: 28133.92, rate: 0.25 },
    zone5: { price: 28707.28, rate: 0.25 },
    zone6: { price: 30857.39, rate: 0.25 },
    zone7: { price: 35352.34, rate: 0.25 },
    zone8: { price: 36376, rate: 0.25 },
  },
  {
    weight: 3,
    zone1: { price: 24113.89, rate: 0.25 },
    zone2: { price: 25833.97, rate: 0.25 },
    zone3: { price: 31065.9, rate: 0.25 },
    zone4: { price: 34147.72, rate: 0.25 },
    zone5: { price: 34721.09, rate: 0.25 },
    zone6: { price: 37802.91, rate: 0.25 },
    zone7: { price: 42723.83, rate: 0.25 },
    zone8: { price: 45041.6, rate: 0.25 },
  },
  {
    weight: 3.5,
    zone1: { price: 28335.94, rate: 0.25 },
    zone2: { price: 30056.02, rate: 0.25 },
    zone3: { price: 37079.71, rate: 0.25 },
    zone4: { price: 40161.53, rate: 0.25 },
    zone5: { price: 40734.89, rate: 0.25 },
    zone6: { price: 44748.43, rate: 0.25 },
    zone7: { price: 50095.32, rate: 0.25 },
    zone8: { price: 53707.2, rate: 0.25 },
  },
  {
    weight: 4,
    zone1: { price: 32557.99, rate: 0.25 },
    zone2: { price: 34278.07, rate: 0.25 },
    zone3: { price: 43093.51, rate: 0.25 },
    zone4: { price: 46175.34, rate: 0.25 },
    zone5: { price: 46748.7, rate: 0.25 },
    zone6: { price: 51693.96, rate: 0.25 },
    zone7: { price: 57466.81, rate: 0.25 },
    zone8: { price: 62372.8, rate: 0.25 },
  },
  {
    weight: 4.5,
    zone1: { price: 36780.04, rate: 0.25 },
    zone2: { price: 38500.12, rate: 0.25 },
    zone3: { price: 49107.32, rate: 0.25 },
    zone4: { price: 52189.14, rate: 0.25 },
    zone5: { price: 52762.51, rate: 0.25 },
    zone6: { price: 58639.48, rate: 0.25 },
    zone7: { price: 64838.3, rate: 0.25 },
    zone8: { price: 71038.41, rate: 0.25 },
  },
  {
    weight: 5,
    zone1: { price: 41002.09, rate: 0.25 },
    zone2: { price: 42722.17, rate: 0.25 },
    zone3: { price: 55121.12, rate: 0.25 },
    zone4: { price: 58202.95, rate: 0.25 },
    zone5: { price: 58776.31, rate: 0.25 },
    zone6: { price: 65585, rate: 0.25 },
    zone7: { price: 72209.79, rate: 0.25 },
    zone8: { price: 79704.01, rate: 0.25 },
  },
  {
    weight: 5.5,
    zone1: { price: 44507.43, rate: 0.25 },
    zone2: { price: 46514.19, rate: 0.25 },
    zone3: { price: 60561.56, rate: 0.25 },
    zone4: { price: 63643.39, rate: 0.25 },
    zone5: { price: 64216.75, rate: 0.25 },
    zone6: { price: 71025.44, rate: 0.25 },
    zone7: { price: 78076.2, rate: 0.25 },
    zone8: { price: 88369.61, rate: 0.25 },
  },
  {
    weight: 6,
    zone1: { price: 48012.78, rate: 0.25 },
    zone2: { price: 50306.21, rate: 0.25 },
    zone3: { price: 66002, rate: 0.25 },
    zone4: { price: 69083.83, rate: 0.25 },
    zone5: { price: 69657.19, rate: 0.25 },
    zone6: { price: 76465.88, rate: 0.25 },
    zone7: { price: 83942.61, rate: 0.25 },
    zone8: { price: 97035.21, rate: 0.25 },
  },
  {
    weight: 6.5,
    zone1: { price: 51518.13, rate: 0.25 },
    zone2: { price: 54098.23, rate: 0.25 },
    zone3: { price: 71442.44, rate: 0.25 },
    zone4: { price: 74524.27, rate: 0.25 },
    zone5: { price: 75097.63, rate: 0.25 },
    zone6: { price: 81906.32, rate: 0.25 },
    zone7: { price: 89809.02, rate: 0.25 },
    zone8: { price: 105700.81, rate: 0.25 },
  },
  {
    weight: 7,
    zone1: { price: 55023.47, rate: 0.25 },
    zone2: { price: 57890.26, rate: 0.25 },
    zone3: { price: 76882.88, rate: 0.25 },
    zone4: { price: 79964.71, rate: 0.25 },
    zone5: { price: 80538.07, rate: 0.25 },
    zone6: { price: 87346.76, rate: 0.25 },
    zone7: { price: 95675.43, rate: 0.25 },
    zone8: { price: 114366.41, rate: 0.25 },
  },
  {
    weight: 7.5,
    zone1: { price: 58528.82, rate: 0.25 },
    zone2: { price: 61682.28, rate: 0.25 },
    zone3: { price: 82323.33, rate: 0.25 },
    zone4: { price: 85405.15, rate: 0.25 },
    zone5: { price: 85978.51, rate: 0.25 },
    zone6: { price: 92787.2, rate: 0.25 },
    zone7: { price: 101541.84, rate: 0.25 },
    zone8: { price: 123032.02, rate: 0.25 },
  },
  {
    weight: 8,
    zone1: { price: 62034.17, rate: 0.25 },
    zone2: { price: 65474.3, rate: 0.25 },
    zone3: { price: 87763.77, rate: 0.25 },
    zone4: { price: 90845.59, rate: 0.25 },
    zone5: { price: 91418.95, rate: 0.25 },
    zone6: { price: 98227.64, rate: 0.25 },
    zone7: { price: 107408.25, rate: 0.25 },
    zone8: { price: 131697.62, rate: 0.25 },
  },
  {
    weight: 8.5,
    zone1: { price: 65539.51, rate: 0.25 },
    zone2: { price: 69266.32, rate: 0.25 },
    zone3: { price: 93204.21, rate: 0.25 },
    zone4: { price: 96286.03, rate: 0.25 },
    zone5: { price: 96859.39, rate: 0.25 },
    zone6: { price: 103668.08, rate: 0.25 },
    zone7: { price: 113274.66, rate: 0.25 },
    zone8: { price: 140363.22, rate: 0.25 },
  },
  {
    weight: 9,
    zone1: { price: 69044.86, rate: 0.25 },
    zone2: { price: 73058.34, rate: 0.25 },
    zone3: { price: 98644.65, rate: 0.25 },
    zone4: { price: 101726.47, rate: 0.25 },
    zone5: { price: 102299.84, rate: 0.25 },
    zone6: { price: 109108.52, rate: 0.25 },
    zone7: { price: 119141.07, rate: 0.25 },
    zone8: { price: 149028.82, rate: 0.25 },
  },
  {
    weight: 9.5,
    zone1: { price: 72550.2, rate: 0.25 },
    zone2: { price: 76850.37, rate: 0.25 },
    zone3: { price: 104085.09, rate: 0.25 },
    zone4: { price: 107166.91, rate: 0.25 },
    zone5: { price: 107740.28, rate: 0.25 },
    zone6: { price: 114548.96, rate: 0.25 },
    zone7: { price: 125007.48, rate: 0.25 },
    zone8: { price: 157694.42, rate: 0.25 },
  },
  {
    weight: 10,
    zone1: { price: 76055.55, rate: 0.25 },
    zone2: { price: 80642.39, rate: 0.25 },
    zone3: { price: 109525.53, rate: 0.25 },
    zone4: { price: 112607.35, rate: 0.25 },
    zone5: { price: 113180.72, rate: 0.25 },
    zone6: { price: 119989.4, rate: 0.25 },
    zone7: { price: 130873.89, rate: 0.25 },
    zone8: { price: 166360.03, rate: 0.25 },
  },
  {
    weight: 10.5,
    zone1: { price: 79560.9, rate: 0.25 },
    zone2: { price: 84434.41, rate: 0.25 },
    zone3: { price: 114965.97, rate: 0.25 },
    zone4: { price: 118047.79, rate: 0.25 },
    zone5: { price: 118621.16, rate: 0.25 },
    zone6: { price: 125429.84, rate: 0.25 },
    zone7: { price: 136740.3, rate: 0.25 },
    zone8: { price: 175025.63, rate: 0.25 },
  },
  {
    weight: 11,
    zone1: { price: 83066.24, rate: 0.25 },
    zone2: { price: 88226.43, rate: 0.25 },
    zone3: { price: 120406.41, rate: 0.25 },
    zone4: { price: 123488.23, rate: 0.25 },
    zone5: { price: 124061.6, rate: 0.25 },
    zone6: { price: 130870.29, rate: 0.25 },
    zone7: { price: 142606.71, rate: 0.25 },
    zone8: { price: 183691.23, rate: 0.25 },
  },
  {
    weight: 11.5,
    zone1: { price: 86571.59, rate: 0.25 },
    zone2: { price: 92018.45, rate: 0.25 },
    zone3: { price: 125846.85, rate: 0.25 },
    zone4: { price: 128928.67, rate: 0.25 },
    zone5: { price: 129502.04, rate: 0.25 },
    zone6: { price: 136310.73, rate: 0.25 },
    zone7: { price: 148473.11, rate: 0.25 },
    zone8: { price: 192356.83, rate: 0.25 },
  },
  {
    weight: 12,
    zone1: { price: 90076.94, rate: 0.25 },
    zone2: { price: 95810.48, rate: 0.25 },
    zone3: { price: 131287.29, rate: 0.25 },
    zone4: { price: 134369.11, rate: 0.25 },
    zone5: { price: 134942.48, rate: 0.25 },
    zone6: { price: 141751.17, rate: 0.25 },
    zone7: { price: 154339.52, rate: 0.25 },
    zone8: { price: 201022.43, rate: 0.25 },
  },
  {
    weight: 12.5,
    zone1: { price: 93582.28, rate: 0.25 },
    zone2: { price: 99602.5, rate: 0.25 },
    zone3: { price: 136727.73, rate: 0.25 },
    zone4: { price: 139809.56, rate: 0.25 },
    zone5: { price: 140382.92, rate: 0.25 },
    zone6: { price: 147191.61, rate: 0.25 },
    zone7: { price: 160205.93, rate: 0.25 },
    zone8: { price: 209688.04, rate: 0.25 },
  },
  {
    weight: 13,
    zone1: { price: 97087.63, rate: 0.25 },
    zone2: { price: 103394.52, rate: 0.25 },
    zone3: { price: 142168.17, rate: 0.25 },
    zone4: { price: 145250, rate: 0.25 },
    zone5: { price: 145823.36, rate: 0.25 },
    zone6: { price: 152632.05, rate: 0.25 },
    zone7: { price: 166072.34, rate: 0.25 },
    zone8: { price: 218353.64, rate: 0.25 },
  },
  {
    weight: 13.5,
    zone1: { price: 100592.98, rate: 0.25 },
    zone2: { price: 107186.54, rate: 0.25 },
    zone3: { price: 147608.61, rate: 0.25 },
    zone4: { price: 150690.44, rate: 0.25 },
    zone5: { price: 151263.8, rate: 0.25 },
    zone6: { price: 158072.49, rate: 0.25 },
    zone7: { price: 171938.75, rate: 0.25 },
    zone8: { price: 227019.24, rate: 0.25 },
  },
  {
    weight: 14,
    zone1: { price: 104098.32, rate: 0.25 },
    zone2: { price: 110978.57, rate: 0.25 },
    zone3: { price: 153049.05, rate: 0.25 },
    zone4: { price: 156130.88, rate: 0.25 },
    zone5: { price: 156704.24, rate: 0.25 },
    zone6: { price: 163512.93, rate: 0.25 },
    zone7: { price: 177805.16, rate: 0.25 },
    zone8: { price: 235684.84, rate: 0.25 },
  },
  {
    weight: 14.5,
    zone1: { price: 107603.67, rate: 0.25 },
    zone2: { price: 114770.59, rate: 0.25 },
    zone3: { price: 158489.49, rate: 0.25 },
    zone4: { price: 161571.32, rate: 0.25 },
    zone5: { price: 162144.68, rate: 0.25 },
    zone6: { price: 168953.37, rate: 0.25 },
    zone7: { price: 183671.57, rate: 0.25 },
    zone8: { price: 244350.44, rate: 0.25 },
  },
  {
    weight: 15,
    zone1: { price: 111109.02, rate: 0.25 },
    zone2: { price: 118562.61, rate: 0.25 },
    zone3: { price: 163929.93, rate: 0.25 },
    zone4: { price: 167011.76, rate: 0.25 },
    zone5: { price: 167585.12, rate: 0.25 },
    zone6: { price: 174393.81, rate: 0.25 },
    zone7: { price: 189537.98, rate: 0.25 },
    zone8: { price: 253016.04, rate: 0.25 },
  },
  {
    weight: 15.5,
    zone1: { price: 114614.36, rate: 0.25 },
    zone2: { price: 122354.63, rate: 0.25 },
    zone3: { price: 169370.38, rate: 0.25 },
    zone4: { price: 172452.2, rate: 0.25 },
    zone5: { price: 173025.56, rate: 0.25 },
    zone6: { price: 179834.25, rate: 0.25 },
    zone7: { price: 195404.39, rate: 0.25 },
    zone8: { price: 261681.65, rate: 0.25 },
  },
  {
    weight: 16,
    zone1: { price: 118119.71, rate: 0.25 },
    zone2: { price: 126146.65, rate: 0.25 },
    zone3: { price: 174810.82, rate: 0.25 },
    zone4: { price: 177892.64, rate: 0.25 },
    zone5: { price: 178466, rate: 0.25 },
    zone6: { price: 185274.69, rate: 0.25 },
    zone7: { price: 201270.8, rate: 0.25 },
    zone8: { price: 270347.25, rate: 0.25 },
  },
  {
    weight: 16.5,
    zone1: { price: 121625.06, rate: 0.25 },
    zone2: { price: 129938.68, rate: 0.25 },
    zone3: { price: 180251.26, rate: 0.25 },
    zone4: { price: 183333.08, rate: 0.25 },
    zone5: { price: 183906.44, rate: 0.25 },
    zone6: { price: 190715.13, rate: 0.25 },
    zone7: { price: 207137.21, rate: 0.25 },
    zone8: { price: 279012.85, rate: 0.25 },
  },
  {
    weight: 17,
    zone1: { price: 125130.4, rate: 0.25 },
    zone2: { price: 133730.7, rate: 0.25 },
    zone3: { price: 185691.7, rate: 0.25 },
    zone4: { price: 188773.52, rate: 0.25 },
    zone5: { price: 189346.89, rate: 0.25 },
    zone6: { price: 196155.57, rate: 0.25 },
    zone7: { price: 213003.62, rate: 0.25 },
    zone8: { price: 287678.45, rate: 0.25 },
  },
  {
    weight: 17.5,
    zone1: { price: 128635.75, rate: 0.25 },
    zone2: { price: 137522.72, rate: 0.25 },
    zone3: { price: 191132.14, rate: 0.25 },
    zone4: { price: 194213.96, rate: 0.25 },
    zone5: { price: 194787.33, rate: 0.25 },
    zone6: { price: 201596.01, rate: 0.25 },
    zone7: { price: 218870.03, rate: 0.25 },
    zone8: { price: 296344.05, rate: 0.25 },
  },
  {
    weight: 18,
    zone1: { price: 132141.1, rate: 0.25 },
    zone2: { price: 141314.74, rate: 0.25 },
    zone3: { price: 196572.58, rate: 0.25 },
    zone4: { price: 199654.4, rate: 0.25 },
    zone5: { price: 200227.77, rate: 0.25 },
    zone6: { price: 207036.45, rate: 0.25 },
    zone7: { price: 224736.44, rate: 0.25 },
    zone8: { price: 305009.66, rate: 0.25 },
  },
  {
    weight: 18.5,
    zone1: { price: 135646.44, rate: 0.25 },
    zone2: { price: 145106.77, rate: 0.25 },
    zone3: { price: 202013.02, rate: 0.25 },
    zone4: { price: 205094.84, rate: 0.25 },
    zone5: { price: 205668.21, rate: 0.25 },
    zone6: { price: 212476.89, rate: 0.25 },
    zone7: { price: 230602.85, rate: 0.25 },
    zone8: { price: 313675.26, rate: 0.25 },
  },
  {
    weight: 19,
    zone1: { price: 139151.79, rate: 0.25 },
    zone2: { price: 148898.79, rate: 0.25 },
    zone3: { price: 207453.46, rate: 0.25 },
    zone4: { price: 210535.28, rate: 0.25 },
    zone5: { price: 211108.65, rate: 0.25 },
    zone6: { price: 217917.34, rate: 0.25 },
    zone7: { price: 236469.26, rate: 0.25 },
    zone8: { price: 322340.86, rate: 0.25 },
  },
  {
    weight: 19.5,
    zone1: { price: 142657.14, rate: 0.25 },
    zone2: { price: 152690.81, rate: 0.25 },
    zone3: { price: 212893.9, rate: 0.25 },
    zone4: { price: 215975.72, rate: 0.25 },
    zone5: { price: 216549.09, rate: 0.25 },
    zone6: { price: 223357.78, rate: 0.25 },
    zone7: { price: 242335.66, rate: 0.25 },
    zone8: { price: 331006.46, rate: 0.25 },
  },
  {
    weight: 20,
    zone1: { price: 146162.48, rate: 0.25 },
    zone2: { price: 156482.83, rate: 0.25 },
    zone3: { price: 218334.34, rate: 0.25 },
    zone4: { price: 221416.16, rate: 0.25 },
    zone5: { price: 221989.53, rate: 0.25 },
    zone6: { price: 228798.22, rate: 0.25 },
    zone7: { price: 248202.07, rate: 0.25 },
    zone8: { price: 339672.06, rate: 0.25 },
  },
  {
    weight: 20.5,
    zone1: { price: 149739.49, rate: 0.25 },
    zone2: { price: 160059.84, rate: 0.25 },
    zone3: { price: 223774.78, rate: 0.25 },
    zone4: { price: 226856.61, rate: 0.25 },
    zone5: { price: 227429.97, rate: 0.25 },
    zone6: { price: 234238.66, rate: 0.25 },
    zone7: { price: 254068.48, rate: 0.25 },
    zone8: { price: 346832.58, rate: 0.25 },
  },
  {
    weight: 21,
    zone1: { price: 153316.5, rate: 0.25 },
    zone2: { price: 163636.85, rate: 0.25 },
    zone3: { price: 229215.22, rate: 0.25 },
    zone4: { price: 232297.05, rate: 0.25 },
    zone5: { price: 232870.41, rate: 0.25 },
    zone6: { price: 239679.1, rate: 0.25 },
    zone7: { price: 259934.89, rate: 0.25 },
    zone8: { price: 353993.11, rate: 0.25 },
  },
  {
    weight: 21.5,
    zone1: { price: 156893.51, rate: 0.25 },
    zone2: { price: 167213.86, rate: 0.25 },
    zone3: { price: 234655.66, rate: 0.25 },
    zone4: { price: 237737.49, rate: 0.25 },
    zone5: { price: 238310.85, rate: 0.25 },
    zone6: { price: 245119.54, rate: 0.25 },
    zone7: { price: 265801.3, rate: 0.25 },
    zone8: { price: 361153.63, rate: 0.25 },
  },
  {
    weight: 22,
    zone1: { price: 160470.52, rate: 0.25 },
    zone2: { price: 170790.87, rate: 0.25 },
    zone3: { price: 240096.1, rate: 0.25 },
    zone4: { price: 243177.93, rate: 0.25 },
    zone5: { price: 243751.29, rate: 0.25 },
    zone6: { price: 250559.98, rate: 0.25 },
    zone7: { price: 271667.71, rate: 0.25 },
    zone8: { price: 368314.15, rate: 0.25 },
  },
  {
    weight: 22.5,
    zone1: { price: 164047.53, rate: 0.25 },
    zone2: { price: 174367.88, rate: 0.25 },
    zone3: { price: 245536.54, rate: 0.25 },
    zone4: { price: 248618.37, rate: 0.25 },
    zone5: { price: 249191.73, rate: 0.25 },
    zone6: { price: 256000.42, rate: 0.25 },
    zone7: { price: 277534.12, rate: 0.25 },
    zone8: { price: 375474.67, rate: 0.25 },
  },
  {
    weight: 23,
    zone1: { price: 167624.54, rate: 0.25 },
    zone2: { price: 177944.88, rate: 0.25 },
    zone3: { price: 250976.98, rate: 0.25 },
    zone4: { price: 254058.81, rate: 0.25 },
    zone5: { price: 254632.17, rate: 0.25 },
    zone6: { price: 261440.86, rate: 0.25 },
    zone7: { price: 283400.53, rate: 0.25 },
    zone8: { price: 382635.19, rate: 0.25 },
  },
  {
    weight: 23.5,
    zone1: { price: 171201.54, rate: 0.25 },
    zone2: { price: 181521.89, rate: 0.25 },
    zone3: { price: 256417.43, rate: 0.25 },
    zone4: { price: 259499.25, rate: 0.25 },
    zone5: { price: 260072.61, rate: 0.25 },
    zone6: { price: 266881.3, rate: 0.25 },
    zone7: { price: 289266.94, rate: 0.25 },
    zone8: { price: 389795.71, rate: 0.25 },
  },
  {
    weight: 24,
    zone1: { price: 174778.55, rate: 0.25 },
    zone2: { price: 185098.9, rate: 0.25 },
    zone3: { price: 261857.87, rate: 0.25 },
    zone4: { price: 264939.69, rate: 0.25 },
    zone5: { price: 265513.05, rate: 0.25 },
    zone6: { price: 272321.74, rate: 0.25 },
    zone7: { price: 295133.35, rate: 0.25 },
    zone8: { price: 396956.23, rate: 0.25 },
  },
  {
    weight: 24.5,
    zone1: { price: 178355.56, rate: 0.25 },
    zone2: { price: 188675.91, rate: 0.25 },
    zone3: { price: 267298.31, rate: 0.25 },
    zone4: { price: 270380.13, rate: 0.25 },
    zone5: { price: 270953.49, rate: 0.25 },
    zone6: { price: 277762.18, rate: 0.25 },
    zone7: { price: 300999.76, rate: 0.25 },
    zone8: { price: 404116.75, rate: 0.25 },
  },
  {
    weight: 25,
    zone1: { price: 181932.57, rate: 0.25 },
    zone2: { price: 192252.92, rate: 0.25 },
    zone3: { price: 272738.75, rate: 0.25 },
    zone4: { price: 275820.57, rate: 0.25 },
    zone5: { price: 276393.94, rate: 0.25 },
    zone6: { price: 283202.62, rate: 0.25 },
    zone7: { price: 306866.17, rate: 0.25 },
    zone8: { price: 411277.28, rate: 0.25 },
  },
  {
    weight: 25.5,
    zone1: { price: 185509.58, rate: 0.25 },
    zone2: { price: 195829.93, rate: 0.25 },
    zone3: { price: 278179.19, rate: 0.25 },
    zone4: { price: 281261.01, rate: 0.25 },
    zone5: { price: 281834.38, rate: 0.25 },
    zone6: { price: 288643.06, rate: 0.25 },
    zone7: { price: 312732.58, rate: 0.25 },
    zone8: { price: 418437.8, rate: 0.25 },
  },
  {
    weight: 26,
    zone1: { price: 189086.59, rate: 0.25 },
    zone2: { price: 199406.94, rate: 0.25 },
    zone3: { price: 283619.63, rate: 0.25 },
    zone4: { price: 286701.45, rate: 0.25 },
    zone5: { price: 287274.82, rate: 0.25 },
    zone6: { price: 294083.5, rate: 0.25 },
    zone7: { price: 318598.99, rate: 0.25 },
    zone8: { price: 425598.32, rate: 0.25 },
  },
  {
    weight: 26.5,
    zone1: { price: 192663.6, rate: 0.25 },
    zone2: { price: 202983.95, rate: 0.25 },
    zone3: { price: 289060.07, rate: 0.25 },
    zone4: { price: 292141.89, rate: 0.25 },
    zone5: { price: 292715.26, rate: 0.25 },
    zone6: { price: 299523.94, rate: 0.25 },
    zone7: { price: 324465.4, rate: 0.25 },
    zone8: { price: 432758.84, rate: 0.25 },
  },
  {
    weight: 27,
    zone1: { price: 196240.61, rate: 0.25 },
    zone2: { price: 206560.95, rate: 0.25 },
    zone3: { price: 294500.51, rate: 0.25 },
    zone4: { price: 297582.33, rate: 0.25 },
    zone5: { price: 298155.7, rate: 0.25 },
    zone6: { price: 304964.39, rate: 0.25 },
    zone7: { price: 330331.81, rate: 0.25 },
    zone8: { price: 439919.36, rate: 0.25 },
  },
  {
    weight: 27.5,
    zone1: { price: 199817.61, rate: 0.25 },
    zone2: { price: 210137.96, rate: 0.25 },
    zone3: { price: 299940.95, rate: 0.25 },
    zone4: { price: 303022.77, rate: 0.25 },
    zone5: { price: 303596.14, rate: 0.25 },
    zone6: { price: 310404.83, rate: 0.25 },
    zone7: { price: 336198.21, rate: 0.25 },
    zone8: { price: 447079.88, rate: 0.25 },
  },
  {
    weight: 28,
    zone1: { price: 203394.62, rate: 0.25 },
    zone2: { price: 213714.97, rate: 0.25 },
    zone3: { price: 305381.39, rate: 0.25 },
    zone4: { price: 308463.21, rate: 0.25 },
    zone5: { price: 309036.58, rate: 0.25 },
    zone6: { price: 315845.27, rate: 0.25 },
    zone7: { price: 342064.62, rate: 0.25 },
    zone8: { price: 454240.4, rate: 0.25 },
  },
  {
    weight: 28.5,
    zone1: { price: 206971.63, rate: 0.25 },
    zone2: { price: 217291.98, rate: 0.25 },
    zone3: { price: 310821.83, rate: 0.25 },
    zone4: { price: 313903.66, rate: 0.25 },
    zone5: { price: 314477.02, rate: 0.25 },
    zone6: { price: 321285.71, rate: 0.25 },
    zone7: { price: 347931.03, rate: 0.25 },
    zone8: { price: 461400.92, rate: 0.25 },
  },
  {
    weight: 29,
    zone1: { price: 210548.64, rate: 0.25 },
    zone2: { price: 220868.99, rate: 0.25 },
    zone3: { price: 316262.27, rate: 0.25 },
    zone4: { price: 319344.1, rate: 0.25 },
    zone5: { price: 319917.46, rate: 0.25 },
    zone6: { price: 326726.15, rate: 0.25 },
    zone7: { price: 353797.44, rate: 0.25 },
    zone8: { price: 468561.45, rate: 0.25 },
  },
  {
    weight: 29.5,
    zone1: { price: 214125.65, rate: 0.25 },
    zone2: { price: 224446, rate: 0.25 },
    zone3: { price: 321702.71, rate: 0.25 },
    zone4: { price: 324784.54, rate: 0.25 },
    zone5: { price: 325357.9, rate: 0.25 },
    zone6: { price: 332166.59, rate: 0.25 },
    zone7: { price: 359663.85, rate: 0.25 },
    zone8: { price: 475721.97, rate: 0.25 },
  },
  {
    weight: 30,
    zone1: { price: 217702.66, rate: 0.25 },
    zone2: { price: 228023.01, rate: 0.25 },
    zone3: { price: 327143.15, rate: 0.25 },
    zone4: { price: 330224.98, rate: 0.25 },
    zone5: { price: 330798.34, rate: 0.25 },
    zone6: { price: 337607.03, rate: 0.25 },
    zone7: { price: 365530.26, rate: 0.25 },
    zone8: { price: 482882.49, rate: 0.25 },
  },
  {
    weight: 31,
    zone1: { price: 224856.69, rate: 0.25 },
    zone2: { price: 235177.04, rate: 0.25 },
    zone3: { price: 338024.03, rate: 0.25 },
    zone4: { price: 341105.86, rate: 0.25 },
    zone5: { price: 341679.22, rate: 0.25 },
    zone6: { price: 348487.91, rate: 0.25 },
    zone7: { price: 377263.08, rate: 0.25 },
    zone8: { price: 497203.54, rate: 0.25 },
  },
  {
    weight: 32,
    zone1: { price: 232010.72, rate: 0.25 },
    zone2: { price: 242331.07, rate: 0.25 },
    zone3: { price: 348904.92, rate: 0.25 },
    zone4: { price: 351986.74, rate: 0.25 },
    zone5: { price: 352560.1, rate: 0.25 },
    zone6: { price: 359368.79, rate: 0.25 },
    zone7: { price: 388995.9, rate: 0.25 },
    zone8: { price: 511524.6, rate: 0.25 },
  },
  {
    weight: 33,
    zone1: { price: 239164.75, rate: 0.25 },
    zone2: { price: 249485.1, rate: 0.25 },
    zone3: { price: 359785.8, rate: 0.25 },
    zone4: { price: 362867.62, rate: 0.25 },
    zone5: { price: 363440.99, rate: 0.25 },
    zone6: { price: 370249.67, rate: 0.25 },
    zone7: { price: 400728.72, rate: 0.25 },
    zone8: { price: 525845.66, rate: 0.25 },
  },
  {
    weight: 34,
    zone1: { price: 246318.78, rate: 0.25 },
    zone2: { price: 256639.13, rate: 0.25 },
    zone3: { price: 370666.68, rate: 0.25 },
    zone4: { price: 373748.5, rate: 0.25 },
    zone5: { price: 374321.87, rate: 0.25 },
    zone6: { price: 381130.55, rate: 0.25 },
    zone7: { price: 412461.54, rate: 0.25 },
    zone8: { price: 540166.71, rate: 0.25 },
  },
  {
    weight: 35,
    zone1: { price: 253472.81, rate: 0.25 },
    zone2: { price: 263793.16, rate: 0.25 },
    zone3: { price: 381547.56, rate: 0.25 },
    zone4: { price: 384629.38, rate: 0.25 },
    zone5: { price: 385202.75, rate: 0.25 },
    zone6: { price: 392011.44, rate: 0.25 },
    zone7: { price: 424194.36, rate: 0.25 },
    zone8: { price: 554487.77, rate: 0.25 },
  },
  {
    weight: 36,
    zone1: { price: 260626.84, rate: 0.25 },
    zone2: { price: 270947.19, rate: 0.25 },
    zone3: { price: 392428.44, rate: 0.25 },
    zone4: { price: 395510.26, rate: 0.25 },
    zone5: { price: 396083.63, rate: 0.25 },
    zone6: { price: 402892.32, rate: 0.25 },
    zone7: { price: 435927.17, rate: 0.25 },
    zone8: { price: 568808.82, rate: 0.25 },
  },
  {
    weight: 37,
    zone1: { price: 267780.87, rate: 0.25 },
    zone2: { price: 278101.22, rate: 0.25 },
    zone3: { price: 403309.32, rate: 0.25 },
    zone4: { price: 406391.15, rate: 0.25 },
    zone5: { price: 406964.51, rate: 0.25 },
    zone6: { price: 413773.2, rate: 0.25 },
    zone7: { price: 447659.99, rate: 0.25 },
    zone8: { price: 583129.88, rate: 0.25 },
  },
  {
    weight: 38,
    zone1: { price: 274934.91, rate: 0.25 },
    zone2: { price: 285255.25, rate: 0.25 },
    zone3: { price: 414190.2, rate: 0.25 },
    zone4: { price: 417272.03, rate: 0.25 },
    zone5: { price: 417845.39, rate: 0.25 },
    zone6: { price: 424654.08, rate: 0.25 },
    zone7: { price: 459392.81, rate: 0.25 },
    zone8: { price: 597450.94, rate: 0.25 },
  },
  {
    weight: 39,
    zone1: { price: 282088.94, rate: 0.25 },
    zone2: { price: 292409.29, rate: 0.25 },
    zone3: { price: 425071.08, rate: 0.25 },
    zone4: { price: 428152.91, rate: 0.25 },
    zone5: { price: 428726.27, rate: 0.25 },
    zone6: { price: 435534.96, rate: 0.25 },
    zone7: { price: 471125.63, rate: 0.25 },
    zone8: { price: 611771.99, rate: 0.25 },
  },
  {
    weight: 40,
    zone1: { price: 289242.97, rate: 0.25 },
    zone2: { price: 299563.32, rate: 0.25 },
    zone3: { price: 435951.97, rate: 0.25 },
    zone4: { price: 439033.79, rate: 0.25 },
    zone5: { price: 439607.15, rate: 0.25 },
    zone6: { price: 446415.84, rate: 0.25 },
    zone7: { price: 482858.45, rate: 0.25 },
    zone8: { price: 626093.05, rate: 0.25 },
  },
  {
    weight: 41,
    zone1: { price: 296397, rate: 0.25 },
    zone2: { price: 306717.35, rate: 0.25 },
    zone3: { price: 446832.85, rate: 0.25 },
    zone4: { price: 449914.67, rate: 0.25 },
    zone5: { price: 450488.04, rate: 0.25 },
    zone6: { price: 457296.72, rate: 0.25 },
    zone7: { price: 494591.27, rate: 0.25 },
    zone8: { price: 640414.1, rate: 0.25 },
  },
  {
    weight: 42,
    zone1: { price: 303551.03, rate: 0.25 },
    zone2: { price: 313871.38, rate: 0.25 },
    zone3: { price: 457713.73, rate: 0.25 },
    zone4: { price: 460795.55, rate: 0.25 },
    zone5: { price: 461368.92, rate: 0.25 },
    zone6: { price: 468177.6, rate: 0.25 },
    zone7: { price: 506324.09, rate: 0.25 },
    zone8: { price: 654735.16, rate: 0.25 },
  },
  {
    weight: 43,
    zone1: { price: 310705.06, rate: 0.25 },
    zone2: { price: 321025.41, rate: 0.25 },
    zone3: { price: 468594.61, rate: 0.25 },
    zone4: { price: 471676.43, rate: 0.25 },
    zone5: { price: 472249.8, rate: 0.25 },
    zone6: { price: 479058.49, rate: 0.25 },
    zone7: { price: 518056.91, rate: 0.25 },
    zone8: { price: 669056.22, rate: 0.25 },
  },
  {
    weight: 44,
    zone1: { price: 317859.09, rate: 0.25 },
    zone2: { price: 328179.44, rate: 0.25 },
    zone3: { price: 479475.49, rate: 0.25 },
    zone4: { price: 482557.31, rate: 0.25 },
    zone5: { price: 483130.68, rate: 0.25 },
    zone6: { price: 489939.37, rate: 0.25 },
    zone7: { price: 529789.72, rate: 0.25 },
    zone8: { price: 683377.27, rate: 0.25 },
  },
  {
    weight: 45,
    zone1: { price: 325013.12, rate: 0.25 },
    zone2: { price: 335333.47, rate: 0.25 },
    zone3: { price: 490356.37, rate: 0.25 },
    zone4: { price: 493438.2, rate: 0.25 },
    zone5: { price: 494011.56, rate: 0.25 },
    zone6: { price: 500820.25, rate: 0.25 },
    zone7: { price: 541522.54, rate: 0.25 },
    zone8: { price: 697698.33, rate: 0.25 },
  },
  {
    weight: 46,
    zone1: { price: 332167.15, rate: 0.25 },
    zone2: { price: 342487.5, rate: 0.25 },
    zone3: { price: 501237.25, rate: 0.25 },
    zone4: { price: 504319.08, rate: 0.25 },
    zone5: { price: 504892.44, rate: 0.25 },
    zone6: { price: 511701.13, rate: 0.25 },
    zone7: { price: 553255.36, rate: 0.25 },
    zone8: { price: 712019.38, rate: 0.25 },
  },
  {
    weight: 47,
    zone1: { price: 339321.18, rate: 0.25 },
    zone2: { price: 349641.53, rate: 0.25 },
    zone3: { price: 512118.13, rate: 0.25 },
    zone4: { price: 515199.96, rate: 0.25 },
    zone5: { price: 515773.32, rate: 0.25 },
    zone6: { price: 522582.01, rate: 0.25 },
    zone7: { price: 564988.18, rate: 0.25 },
    zone8: { price: 726340.44, rate: 0.25 },
  },
  {
    weight: 48,
    zone1: { price: 346475.21, rate: 0.25 },
    zone2: { price: 356795.56, rate: 0.25 },
    zone3: { price: 522999.02, rate: 0.25 },
    zone4: { price: 526080.84, rate: 0.25 },
    zone5: { price: 526654.2, rate: 0.25 },
    zone6: { price: 533462.89, rate: 0.25 },
    zone7: { price: 576721, rate: 0.25 },
    zone8: { price: 740661.5, rate: 0.25 },
  },
  {
    weight: 49,
    zone1: { price: 353629.25, rate: 0.25 },
    zone2: { price: 363949.59, rate: 0.25 },
    zone3: { price: 533879.9, rate: 0.25 },
    zone4: { price: 536961.72, rate: 0.25 },
    zone5: { price: 537535.09, rate: 0.25 },
    zone6: { price: 544343.77, rate: 0.25 },
    zone7: { price: 588453.82, rate: 0.25 },
    zone8: { price: 754982.55, rate: 0.25 },
  },
  {
    weight: 50,
    zone1: { price: 360783.28, rate: 0.25 },
    zone2: { price: 371103.63, rate: 0.25 },
    zone3: { price: 544760.78, rate: 0.25 },
    zone4: { price: 547842.6, rate: 0.25 },
    zone5: { price: 548415.97, rate: 0.25 },
    zone6: { price: 555224.65, rate: 0.25 },
    zone7: { price: 600186.64, rate: 0.25 },
    zone8: { price: 769303.61, rate: 0.25 },
  },
  {
    weight: 51,
    zone1: { price: 367937.31, rate: 0.25 },
    zone2: { price: 378257.66, rate: 0.25 },
    zone3: { price: 555641.66, rate: 0.25 },
    zone4: { price: 558723.48, rate: 0.25 },
    zone5: { price: 559296.85, rate: 0.25 },
    zone6: { price: 566105.54, rate: 0.25 },
    zone7: { price: 611919.46, rate: 0.25 },
    zone8: { price: 783624.66, rate: 0.25 },
  },
  {
    weight: 52,
    zone1: { price: 375091.34, rate: 0.25 },
    zone2: { price: 385411.69, rate: 0.25 },
    zone3: { price: 566522.54, rate: 0.25 },
    zone4: { price: 569604.36, rate: 0.25 },
    zone5: { price: 570177.73, rate: 0.25 },
    zone6: { price: 576986.42, rate: 0.25 },
    zone7: { price: 623652.27, rate: 0.25 },
    zone8: { price: 797945.72, rate: 0.25 },
  },
  {
    weight: 53,
    zone1: { price: 382245.37, rate: 0.25 },
    zone2: { price: 392565.72, rate: 0.25 },
    zone3: { price: 577403.42, rate: 0.25 },
    zone4: { price: 580485.25, rate: 0.25 },
    zone5: { price: 581058.61, rate: 0.25 },
    zone6: { price: 587867.3, rate: 0.25 },
    zone7: { price: 635385.09, rate: 0.25 },
    zone8: { price: 812266.78, rate: 0.25 },
  },
  {
    weight: 54,
    zone1: { price: 389399.4, rate: 0.25 },
    zone2: { price: 399719.75, rate: 0.25 },
    zone3: { price: 588284.3, rate: 0.25 },
    zone4: { price: 591366.13, rate: 0.25 },
    zone5: { price: 591939.49, rate: 0.25 },
    zone6: { price: 598748.18, rate: 0.25 },
    zone7: { price: 647117.91, rate: 0.25 },
    zone8: { price: 826587.83, rate: 0.25 },
  },
  {
    weight: 55,
    zone1: { price: 396553.43, rate: 0.25 },
    zone2: { price: 406873.78, rate: 0.25 },
    zone3: { price: 599165.18, rate: 0.25 },
    zone4: { price: 602247.01, rate: 0.25 },
    zone5: { price: 602820.37, rate: 0.25 },
    zone6: { price: 609629.06, rate: 0.25 },
    zone7: { price: 658850.73, rate: 0.25 },
    zone8: { price: 840908.89, rate: 0.25 },
  },
  {
    weight: 56,
    zone1: { price: 403707.46, rate: 0.25 },
    zone2: { price: 414027.81, rate: 0.25 },
    zone3: { price: 610046.07, rate: 0.25 },
    zone4: { price: 613127.89, rate: 0.25 },
    zone5: { price: 613701.25, rate: 0.25 },
    zone6: { price: 620509.94, rate: 0.25 },
    zone7: { price: 670583.55, rate: 0.25 },
    zone8: { price: 855229.94, rate: 0.25 },
  },
  {
    weight: 57,
    zone1: { price: 410861.49, rate: 0.25 },
    zone2: { price: 421181.84, rate: 0.25 },
    zone3: { price: 620926.95, rate: 0.25 },
    zone4: { price: 624008.77, rate: 0.25 },
    zone5: { price: 624582.14, rate: 0.25 },
    zone6: { price: 631390.82, rate: 0.25 },
    zone7: { price: 682316.37, rate: 0.25 },
    zone8: { price: 869551, rate: 0.25 },
  },
  {
    weight: 58,
    zone1: { price: 418015.52, rate: 0.25 },
    zone2: { price: 428335.87, rate: 0.25 },
    zone3: { price: 631807.83, rate: 0.25 },
    zone4: { price: 634889.65, rate: 0.25 },
    zone5: { price: 635463.02, rate: 0.25 },
    zone6: { price: 642271.7, rate: 0.25 },
    zone7: { price: 694049.19, rate: 0.25 },
    zone8: { price: 883872.05, rate: 0.25 },
  },
  {
    weight: 59,
    zone1: { price: 425169.55, rate: 0.25 },
    zone2: { price: 435489.9, rate: 0.25 },
    zone3: { price: 642688.71, rate: 0.25 },
    zone4: { price: 645770.53, rate: 0.25 },
    zone5: { price: 646343.9, rate: 0.25 },
    zone6: { price: 653152.59, rate: 0.25 },
    zone7: { price: 705782.01, rate: 0.25 },
    zone8: { price: 898193.11, rate: 0.25 },
  },
  {
    weight: 60,
    zone1: { price: 432323.59, rate: 0.25 },
    zone2: { price: 442643.94, rate: 0.25 },
    zone3: { price: 653569.59, rate: 0.25 },
    zone4: { price: 656651.41, rate: 0.25 },
    zone5: { price: 657224.78, rate: 0.25 },
    zone6: { price: 664033.47, rate: 0.25 },
    zone7: { price: 717514.82, rate: 0.25 },
    zone8: { price: 912514.17, rate: 0.25 },
  },
  {
    weight: 61,
    zone1: { price: 439477.62, rate: 0.25 },
    zone2: { price: 449797.97, rate: 0.25 },
    zone3: { price: 664450.47, rate: 0.25 },
    zone4: { price: 667532.3, rate: 0.25 },
    zone5: { price: 668105.66, rate: 0.25 },
    zone6: { price: 674914.35, rate: 0.25 },
    zone7: { price: 729247.64, rate: 0.25 },
    zone8: { price: 926835.22, rate: 0.25 },
  },
  {
    weight: 62,
    zone1: { price: 446631.65, rate: 0.25 },
    zone2: { price: 456952, rate: 0.25 },
    zone3: { price: 675331.35, rate: 0.25 },
    zone4: { price: 678413.18, rate: 0.25 },
    zone5: { price: 678986.54, rate: 0.25 },
    zone6: { price: 685795.23, rate: 0.25 },
    zone7: { price: 740980.46, rate: 0.25 },
    zone8: { price: 941156.28, rate: 0.25 },
  },
  {
    weight: 63,
    zone1: { price: 453785.68, rate: 0.25 },
    zone2: { price: 464106.03, rate: 0.25 },
    zone3: { price: 686212.23, rate: 0.25 },
    zone4: { price: 689294.06, rate: 0.25 },
    zone5: { price: 689867.42, rate: 0.25 },
    zone6: { price: 696676.11, rate: 0.25 },
    zone7: { price: 752713.28, rate: 0.25 },
    zone8: { price: 955477.33, rate: 0.25 },
  },
  {
    weight: 64,
    zone1: { price: 460939.71, rate: 0.25 },
    zone2: { price: 471260.06, rate: 0.25 },
    zone3: { price: 697093.12, rate: 0.25 },
    zone4: { price: 700174.94, rate: 0.25 },
    zone5: { price: 700748.3, rate: 0.25 },
    zone6: { price: 707556.99, rate: 0.25 },
    zone7: { price: 764446.1, rate: 0.25 },
    zone8: { price: 969798.39, rate: 0.25 },
  },
  {
    weight: 65,
    zone1: { price: 468093.74, rate: 0.25 },
    zone2: { price: 478414.09, rate: 0.25 },
    zone3: { price: 707974, rate: 0.25 },
    zone4: { price: 711055.82, rate: 0.25 },
    zone5: { price: 711629.19, rate: 0.25 },
    zone6: { price: 718437.87, rate: 0.25 },
    zone7: { price: 776178.92, rate: 0.25 },
    zone8: { price: 984119.45, rate: 0.25 },
  },
  {
    weight: 66,
    zone1: { price: 475247.77, rate: 0.25 },
    zone2: { price: 485568.12, rate: 0.25 },
    zone3: { price: 718854.88, rate: 0.25 },
    zone4: { price: 721936.7, rate: 0.25 },
    zone5: { price: 722510.07, rate: 0.25 },
    zone6: { price: 729318.75, rate: 0.25 },
    zone7: { price: 787911.74, rate: 0.25 },
    zone8: { price: 998440.5, rate: 0.25 },
  },
  {
    weight: 67,
    zone1: { price: 482401.8, rate: 0.25 },
    zone2: { price: 492722.15, rate: 0.25 },
    zone3: { price: 729735.76, rate: 0.25 },
    zone4: { price: 732817.58, rate: 0.25 },
    zone5: { price: 733390.95, rate: 0.25 },
    zone6: { price: 740199.64, rate: 0.25 },
    zone7: { price: 799644.56, rate: 0.25 },
    zone8: { price: 1012761.56, rate: 0.25 },
  },
  {
    weight: 68,
    zone1: { price: 489555.83, rate: 0.25 },
    zone2: { price: 499876.18, rate: 0.25 },
    zone3: { price: 740616.64, rate: 0.25 },
    zone4: { price: 743698.46, rate: 0.25 },
    zone5: { price: 744271.83, rate: 0.25 },
    zone6: { price: 751080.52, rate: 0.25 },
    zone7: { price: 811377.37, rate: 0.25 },
    zone8: { price: 1027082.61, rate: 0.25 },
  },
  {
    weight: 69,
    zone1: { price: 496709.86, rate: 0.25 },
    zone2: { price: 507030.21, rate: 0.25 },
    zone3: { price: 751497.52, rate: 0.25 },
    zone4: { price: 754579.35, rate: 0.25 },
    zone5: { price: 755152.71, rate: 0.25 },
    zone6: { price: 761961.4, rate: 0.25 },
    zone7: { price: 823110.19, rate: 0.25 },
    zone8: { price: 1041403.67, rate: 0.25 },
  },
  {
    weight: 70,
    zone1: { price: 503863.9, rate: 0.25 },
    zone2: { price: 514184.24, rate: 0.25 },
    zone3: { price: 762378.4, rate: 0.25 },
    zone4: { price: 765460.23, rate: 0.25 },
    zone5: { price: 766033.59, rate: 0.25 },
    zone6: { price: 772842.28, rate: 0.25 },
    zone7: { price: 834843.01, rate: 0.25 },
    zone8: { price: 1055724.73, rate: 0.25 },
  },
];

module.exports = zonedata;
