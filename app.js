function main() {
  const côté = 32
  const gridCellCount = côté * côté
  const grid = document.querySelector('.grid')
  const cells = []
  let pacmanPosition = 495
  const wallPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 45, 46, 47, 48, 49, 50, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 95, 96, 98, 99, 100, 101, 103, 104, 105, 106, 107, 116, 117, 118, 119, 120, 122, 123, 124, 125, 127, 128, 130, 131, 132, 133, 135, 136, 137, 138, 139, 141, 143, 144, 146, 148, 149, 150, 151, 152, 154, 155, 156, 157, 159, 160, 173, 175, 176, 178, 191, 192, 194, 195, 196, 197, 199, 200, 201, 202, 203, 205, 207, 208, 210, 212, 213, 214, 215, 216, 218, 219, 220, 221, 223, 224, 226, 227, 228, 229, 237, 239, 240, 242, 269, 274, 301, 302, 303, 304, 305, 306, 314, 315, 316, 317, 231, 232, 233, 234, 235, 244, 245, 246, 247, 248, 250, 251, 252, 253, 255, 256, 258, 259, 260, 261, 263, 264, 265, 266, 267, 276, 277, 278, 279, 280, 282, 283, 284, 285, 287, 288, 290, 291, 291, 292, 293, 319, 320, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 351, 352, 383, 384, 415, 416, 447, 448, 479, 480, 511, 512, 543, 544, 575, 576, 607, 608, 639, 640, 671, 672, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 703, 704, 706, 707, 708, 709, 717, 718, 719, 720, 721, 722, 730, 731, 732, 733, 735, 736, 738, 739, 740, 741, 743, 744, 745, 746, 747, 749, 754, 756, 757, 758, 759, 760, 762, 763, 764, 765, 767, 768, 770, 771, 772, 773, 775, 776, 777, 778, 779, 781, 783, 784, 786, 788, 789, 790, 791, 792, 794, 795, 796, 797, 799, 800, 802, 803, 804, 805, 807, 808, 809, 810, 811, 813, 815, 816, 818, 820, 821, 822, 823, 824, 826, 827, 828, 829, 831, 832, 845, 847, 848, 850, 863, 864, 866, 867, 868, 869, 871, 872, 873, 874, 875, 877, 879, 880, 882, 884, 885, 886, 887, 888, 890, 891, 892, 893, 895, 896, 898, 899, 900, 901, 903, 904, 905, 906, 907, 916, 917, 918, 919, 920, 922, 923, 924, 925, 927, 928, 930, 931, 932, 933, 935, 936, 937, 938, 939, 941, 942, 943, 944, 945, 946, 948, 949, 950, 951, 952, 954, 955, 956, 957, 959, 960, 973, 974, 975, 976, 977, 978, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023]
  let vegetable1Position = 166
  let vegetable2Position = 111
  let vegetable3Position = 185
  let vegetable4Position = 353
  let vegetable5Position = 363
  let vegetable6Position = 373
  let vegetable7Position = 838
  let vegetable8Position = 912
  let vegetable9Position = 857
  const vegetable1Territory = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 65, 70, 97, 102, 129, 134, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 193, 198, 225, 230, 257, 257, 262, 289, 294, 295, 296, 297, 298, 321, 322, 323, 324, 325, 326]
  const vegetable2Territory = [43, 44, 51, 52, 76, 83, 108, 109, 110, 111, 112, 113, 114, 115, 140, 142, 145, 147, 171, 172, 174, 177, 179, 180, 204, 206, 209, 211, 236, 238, 241, 243, 268, 270, 271, 272, 273, 275, 299, 300, 307, 308]
  const vegetable3Territory = [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 89, 94, 121, 126, 153, 158, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190,  217, 222, 249, 254, 281, 286, 309, 310, 311, 312, 313, 318, 345, 346, 347, 348, 349, 350]
  const vegetable4Territory = [353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650]
  const vegetable5Territory = [363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660]
  const vegetable6Territory = [373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670]
  const vegetable7Territory = [673, 674, 675, 676, 677, 678, 705, 710, 711, 712, 713, 714, 737, 742, 769, 774, 801, 806, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 865, 870, 897, 902, 929, 934, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970]
  const vegetable8Territory = [715, 716, 723, 724, 748, 750, 751, 752, 753, 755, 780, 782, 785, 787, 812, 814, 817, 819, 843, 844, 846, 849, 851, 852, 876, 878, 881, 883, 908, 909, 910, 911, 912, 913, 914, 915, 940, 947, 971, 972, 979, 980]
  const vegetable9Territory = [697, 698, 699, 700, 701, 702, 725, 726, 727, 728, 729, 734, 761, 766, 793, 798, 825, 830, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 889, 894, 921, 926, 953, 958, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990]

  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innerHTML = i
    if (i === pacmanPosition) {
      cell.classList.add('pacman-looking-right')
    }
    if (i === vegetable1Position || i === vegetable2Position || i === vegetable3Position || i === vegetable4Position || i === vegetable5Position || i === vegetable6Position || i === vegetable7Position || i === vegetable8Position || i === vegetable9Position) {
      cell.classList.add('vegetable')
    }
    grid.appendChild(cell)
    cells.push(cell)
  }

  for (let i = 0; i < wallPosition.length; i++) {
    cells[wallPosition[i]].classList.add('wall')
  }

  // won't actually be colored, just need to see it right now
  for (let i = 0; i < vegetable1Territory.length; i++) {
    cells[vegetable1Territory[i]].classList.add('vege1terri')
  }

  for (let i = 0; i < vegetable2Territory.length; i++) {
    cells[vegetable2Territory[i]].classList.add('vege2terri')
  }

  for (let i = 0; i < vegetable3Territory.length; i++) {
    cells[vegetable3Territory[i]].classList.add('vege3terri')
  }

  for (let i = 0; i < vegetable4Territory.length; i++) {
    cells[vegetable4Territory[i]].classList.add('vege4terri')
  }

  for (let i = 0; i < vegetable5Territory.length; i++) {
    cells[vegetable5Territory[i]].classList.add('vege5terri')
  }

  for (let i = 0; i < vegetable6Territory.length; i++) {
    cells[vegetable6Territory[i]].classList.add('vege6terri')
  }

  for (let i = 0; i < vegetable7Territory.length; i++) {
    cells[vegetable7Territory[i]].classList.add('vege7terri')
  }

  for (let i = 0; i < vegetable8Territory.length; i++) {
    cells[vegetable8Territory[i]].classList.add('vege8terri')
  }

  for (let i = 0; i < vegetable9Territory.length; i++) {
    cells[vegetable9Territory[i]].classList.add('vege9terri')
  }



  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (pacmanPosition === cells.length - 1) {
        return
      }
      if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
        cells[pacmanPosition].classList.remove('pacman-looking-right')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
        cells[pacmanPosition].classList.remove('pacman-looking-left')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
        cells[pacmanPosition].classList.remove('pacman-looking-up')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
        cells[pacmanPosition].classList.remove('pacman-looking-down')
      }
      pacmanPosition += 1
      cells[pacmanPosition].classList.add('pacman-looking-right')
    } else if (event.key === 'ArrowLeft') {
      if (pacmanPosition === 0) {
        return
      }
      if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
        cells[pacmanPosition].classList.remove('pacman-looking-right')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
        cells[pacmanPosition].classList.remove('pacman-looking-left')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
        cells[pacmanPosition].classList.remove('pacman-looking-up')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
        cells[pacmanPosition].classList.remove('pacman-looking-down')
      }
      pacmanPosition -= 1
      cells[pacmanPosition].classList.add('pacman-looking-left')
    } else if (event.key === 'ArrowUp') {
      if (pacmanPosition < côté) {
        return
      }
      if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
        cells[pacmanPosition].classList.remove('pacman-looking-right')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
        cells[pacmanPosition].classList.remove('pacman-looking-left')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
        cells[pacmanPosition].classList.remove('pacman-looking-up')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
        cells[pacmanPosition].classList.remove('pacman-looking-down')
      }
      pacmanPosition -= côté
      cells[pacmanPosition].classList.add('pacman-looking-up')
    } else if (event.key === 'ArrowDown') {
      if (pacmanPosition > cells.length - côté - 1) {
        return
      }
      if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
        cells[pacmanPosition].classList.remove('pacman-looking-right')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
        cells[pacmanPosition].classList.remove('pacman-looking-left')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
        cells[pacmanPosition].classList.remove('pacman-looking-up')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
        cells[pacmanPosition].classList.remove('pacman-looking-down')
      }
      pacmanPosition += côté
      cells[pacmanPosition].classList.add('pacman-looking-down')
    }
  })

  const cellsInTerritory1 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege1terri')) {
      cellsInTerritory1.push(cells[i])
    }
  }

  const cellsInTerritory2 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege2terri')) {
      cellsInTerritory2.push(cells[i])
    }
  }

  const cellsInTerritory3 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege3terri')) {
      cellsInTerritory3.push(cells[i])
    }
  }

  const cellsInTerritory4 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege4terri')) {
      cellsInTerritory4.push(cells[i])
    }
  }

  const cellsInTerritory5 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege5terri')) {
      cellsInTerritory5.push(cells[i])
    }
  }

  const cellsInTerritory6 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege6terri')) {
      cellsInTerritory6.push(cells[i])
    }
  }

  const cellsInTerritory7 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege7terri')) {
      cellsInTerritory7.push(cells[i])
    }
  }

  const cellsInTerritory8 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege8terri')) {
      cellsInTerritory8.push(cells[i])
    }
  }

  const cellsInTerritory9 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege9terri')) {
      cellsInTerritory9.push(cells[i])
    }
  }

  const arrayOfDirections = ['right', 'left', 'up', 'down']

  function veggiesGoRandom() {
    const randomInterval = setInterval(() => {
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('vege1terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
          clearInterval(randomInterval)
          chase()
        }
      }
      const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
      if (randomDirection === 0) {
        if (!cells[vegetable1Position + 1].classList.contains('vege1terri')) {
          return
        }
        cells[parseInt(vegetable1Position)].classList.remove('vegetable')
        vegetable1Position += 1
        cells[parseInt(vegetable1Position)].classList.add('vegetable')
      } else if (randomDirection === 1) {
        if (!cells[vegetable1Position - 1].classList.contains('vege1terri')) {
          return
        }
        cells[parseInt(vegetable1Position)].classList.remove('vegetable')
        vegetable1Position -= 1
        cells[parseInt(vegetable1Position)].classList.add('vegetable')
      } else if (randomDirection === 2) {
        if (!cells[vegetable1Position - côté].classList.contains('vege1terri')) {
          return
        }
        cells[parseInt(vegetable1Position)].classList.remove('vegetable')
        vegetable1Position -= côté
        cells[parseInt(vegetable1Position)].classList.add('vegetable')
      } else if (randomDirection === 3) {
        if (!cells[vegetable1Position + côté].classList.contains('vege1terri')) {
          return
        }
        cells[parseInt(vegetable1Position)].classList.remove('vegetable')
        vegetable1Position += côté
        cells[parseInt(vegetable1Position)].classList.add('vegetable')
      }
    }, 300)
  }

  veggiesGoRandom()

  function chase() {
    const chaseInterval = setInterval(() => {
      if (vegetable1Territory.includes(pacmanPosition)) {
        if (pacmanPosition === vegetable1Position) {
          alert('Oh no! You\'ve been caught!')
          cells[parseInt(vegetable1Position)].classList.remove('vegetable')
          vegetable1Position = 166
          cells[parseInt(vegetable1Position)].classList.add('vegetable')
        } else if (pacmanPosition > vegetable1Position) {
          // console.log('Bitch I see you')
          cells[parseInt(vegetable1Position)].classList.remove('vegetable')
          if (vegetable1Territory.includes(vegetable1Position + 1) && (vegetable1Position + 1 === pacmanPosition || vegetable1Position + 2 === pacmanPosition || vegetable1Position + 3 === pacmanPosition || vegetable1Position + 4 === pacmanPosition || vegetable1Position + 5 === pacmanPosition)) {
            // console.log(vegetable1Position)
            // console.log('Coming to the right!')
            vegetable1Position++
          } else if (vegetable1Territory.includes(vegetable1Position + 1) && vegetable1Territory.includes(vegetable1Position + 2) && vegetable1Territory.includes(vegetable1Position + 3) && vegetable1Territory.includes(vegetable1Position + 4) && vegetable1Territory.includes(vegetable1Position + 5)) {
            // console.log(vegetable1Position)
            // console.log('Coming to the right!')
            vegetable1Position++
          } else if (vegetable1Territory.includes(vegetable1Position + 32)) {
            // console.log(vegetable1Position)
            // console.log('Coming down!')
            vegetable1Position = vegetable1Position + 32
          } else {
            // console.log(vegetable1Position)
            // console.log('Coming to the left!')
            vegetable1Position--
          }
          cells[parseInt(vegetable1Position)].classList.add('vegetable')
        } else if (pacmanPosition < vegetable1Position) {
          // console.log('Bitch I\'m coming for you')
          cells[parseInt(vegetable1Position)].classList.remove('vegetable')
          if (vegetable1Territory.includes(vegetable1Position - 1) && (vegetable1Position - 1 === pacmanPosition || vegetable1Position - 2 === pacmanPosition || vegetable1Position - 3 === pacmanPosition || vegetable1Position - 4 === pacmanPosition || vegetable1Position - 5 === pacmanPosition)) {
            // console.log(vegetable1Position)
            // console.log('Coming to the left!')
            vegetable1Position--
          } else if (vegetable1Territory.includes(vegetable1Position - 1) && vegetable1Territory.includes(vegetable1Position - 2) && vegetable1Territory.includes(vegetable1Position - 3) && vegetable1Territory.includes(vegetable1Position - 4) && vegetable1Territory.includes(vegetable1Position - 5) && vegetable1Territory.includes(vegetable1Position - 6)) {
            // console.log(vegetable1Position)
            // console.log('Coming to the left!')
            vegetable1Position--
          } else if (vegetable1Territory.includes(vegetable1Position - 32)) {
            // console.log(vegetable1Position)
            // console.log('Coming up!')
            vegetable1Position = vegetable1Position - 32
          } else {
            // console.log(vegetable1Position)
            // console.log('Coming to the right!')
            vegetable1Position++
          }
          cells[parseInt(vegetable1Position)].classList.add('vegetable')
        }
      } else if (!vegetable1Territory.includes(pacmanPosition)) {
        console.log('I\'m letting you go')
        clearInterval(chaseInterval)
        veggiesGoRandom()
      }
    }, 300)
  }

  if (pacmanPosition === vegetable1Position) {
    alert('Oh no! You\'ve been caught!')
  }


}

window.addEventListener('DOMContentLoaded', main)