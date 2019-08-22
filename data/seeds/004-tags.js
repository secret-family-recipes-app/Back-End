
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {
          "id": 1,
          "tag": "seafood",
          "recipe_id": 5
        },
        {
          "id": 2,
          "tag": "desserts",
          "recipe_id": 60
        },
        {
          "id": 3,
          "tag": "stew",
          "recipe_id": 25
        },
        {
          "id": 4,
          "tag": "desserts",
          "recipe_id": 43
        },
        {
          "id": 5,
          "tag": "sandwich",
          "recipe_id": 35
        },
        {
          "id": 6,
          "tag": "seafood",
          "recipe_id": 64
        },
        {
          "id": 7,
          "tag": "sandwich",
          "recipe_id": 51
        },
        {
          "id": 8,
          "tag": "sandwich",
          "recipe_id": 10
        },
        {
          "id": 9,
          "tag": "salad",
          "recipe_id": 42
        },
        {
          "id": 10,
          "tag": "soup",
          "recipe_id": 17
        },
        {
          "id": 11,
          "tag": "pie",
          "recipe_id": 78
        },
        {
          "id": 12,
          "tag": "pasta",
          "recipe_id": 49
        },
        {
          "id": 13,
          "tag": "soup",
          "recipe_id": 65
        },
        {
          "id": 14,
          "tag": "soup",
          "recipe_id": 23
        },
        {
          "id": 15,
          "tag": "pie",
          "recipe_id": 60
        },
        {
          "id": 16,
          "tag": "seafood",
          "recipe_id": 49
        },
        {
          "id": 17,
          "tag": "stew",
          "recipe_id": 1
        },
        {
          "id": 18,
          "tag": "sandwich",
          "recipe_id": 16
        },
        {
          "id": 19,
          "tag": "stew",
          "recipe_id": 68
        },
        {
          "id": 20,
          "tag": "stew",
          "recipe_id": 1
        },
        {
          "id": 21,
          "tag": "sandwich",
          "recipe_id": 77
        },
        {
          "id": 22,
          "tag": "desserts",
          "recipe_id": 15
        },
        {
          "id": 23,
          "tag": "stew",
          "recipe_id": 45
        },
        {
          "id": 24,
          "tag": "pie",
          "recipe_id": 38
        },
        {
          "id": 25,
          "tag": "seafood",
          "recipe_id": 25
        },
        {
          "id": 26,
          "tag": "sandwich",
          "recipe_id": 16
        },
        {
          "id": 27,
          "tag": "desserts",
          "recipe_id": 74
        },
        {
          "id": 28,
          "tag": "desserts",
          "recipe_id": 11
        },
        {
          "id": 29,
          "tag": "sandwich",
          "recipe_id": 35
        },
        {
          "id": 30,
          "tag": "soup",
          "recipe_id": 15
        },
        {
          "id": 31,
          "tag": "desserts",
          "recipe_id": 74
        },
        {
          "id": 32,
          "tag": "pie",
          "recipe_id": 70
        },
        {
          "id": 33,
          "tag": "pasta",
          "recipe_id": 19
        },
        {
          "id": 34,
          "tag": "stew",
          "recipe_id": 47
        },
        {
          "id": 35,
          "tag": "seafood",
          "recipe_id": 53
        },
        {
          "id": 36,
          "tag": "desserts",
          "recipe_id": 36
        },
        {
          "id": 37,
          "tag": "stew",
          "recipe_id": 59
        },
        {
          "id": 38,
          "tag": "pie",
          "recipe_id": 32
        },
        {
          "id": 39,
          "tag": "pie",
          "recipe_id": 2
        },
        {
          "id": 40,
          "tag": "pie",
          "recipe_id": 44
        },
        {
          "id": 41,
          "tag": "soup",
          "recipe_id": 73
        },
        {
          "id": 42,
          "tag": "desserts",
          "recipe_id": 66
        },
        {
          "id": 43,
          "tag": "pasta",
          "recipe_id": 38
        },
        {
          "id": 44,
          "tag": "soup",
          "recipe_id": 27
        },
        {
          "id": 45,
          "tag": "stew",
          "recipe_id": 36
        },
        {
          "id": 46,
          "tag": "pasta",
          "recipe_id": 78
        },
        {
          "id": 47,
          "tag": "sandwich",
          "recipe_id": 31
        },
        {
          "id": 48,
          "tag": "soup",
          "recipe_id": 15
        },
        {
          "id": 49,
          "tag": "soup",
          "recipe_id": 15
        },
        {
          "id": 50,
          "tag": "salad",
          "recipe_id": 28
        },
        {
          "id": 51,
          "tag": "soup",
          "recipe_id": 26
        },
        {
          "id": 52,
          "tag": "stew",
          "recipe_id": 16
        },
        {
          "id": 53,
          "tag": "seafood",
          "recipe_id": 72
        },
        {
          "id": 54,
          "tag": "sandwich",
          "recipe_id": 36
        },
        {
          "id": 55,
          "tag": "seafood",
          "recipe_id": 65
        },
        {
          "id": 56,
          "tag": "pasta",
          "recipe_id": 36
        },
        {
          "id": 57,
          "tag": "seafood",
          "recipe_id": 11
        },
        {
          "id": 58,
          "tag": "pasta",
          "recipe_id": 54
        },
        {
          "id": 59,
          "tag": "seafood",
          "recipe_id": 8
        },
        {
          "id": 60,
          "tag": "salad",
          "recipe_id": 33
        },
        {
          "id": 61,
          "tag": "soup",
          "recipe_id": 40
        },
        {
          "id": 62,
          "tag": "desserts",
          "recipe_id": 50
        },
        {
          "id": 63,
          "tag": "desserts",
          "recipe_id": 25
        },
        {
          "id": 64,
          "tag": "stew",
          "recipe_id": 30
        },
        {
          "id": 65,
          "tag": "sandwich",
          "recipe_id": 5
        },
        {
          "id": 66,
          "tag": "soup",
          "recipe_id": 42
        },
        {
          "id": 67,
          "tag": "desserts",
          "recipe_id": 23
        },
        {
          "id": 68,
          "tag": "salad",
          "recipe_id": 53
        },
        {
          "id": 69,
          "tag": "stew",
          "recipe_id": 75
        },
        {
          "id": 70,
          "tag": "pie",
          "recipe_id": 29
        },
        {
          "id": 71,
          "tag": "sandwich",
          "recipe_id": 23
        },
        {
          "id": 72,
          "tag": "desserts",
          "recipe_id": 36
        },
        {
          "id": 73,
          "tag": "pasta",
          "recipe_id": 35
        },
        {
          "id": 74,
          "tag": "sandwich",
          "recipe_id": 73
        },
        {
          "id": 75,
          "tag": "desserts",
          "recipe_id": 19
        },
        {
          "id": 76,
          "tag": "soup",
          "recipe_id": 72
        },
        {
          "id": 77,
          "tag": "salad",
          "recipe_id": 19
        },
        {
          "id": 78,
          "tag": "stew",
          "recipe_id": 71
        },
        {
          "id": 79,
          "tag": "sandwich",
          "recipe_id": 25
        },
        {
          "id": 80,
          "tag": "pasta",
          "recipe_id": 10
        },
        {
          "id": 81,
          "tag": "soup",
          "recipe_id": 7
        },
        {
          "id": 82,
          "tag": "sandwich",
          "recipe_id": 76
        },
        {
          "id": 83,
          "tag": "soup",
          "recipe_id": 39
        },
        {
          "id": 84,
          "tag": "soup",
          "recipe_id": 14
        },
        {
          "id": 85,
          "tag": "salad",
          "recipe_id": 33
        },
        {
          "id": 86,
          "tag": "pasta",
          "recipe_id": 42
        },
        {
          "id": 87,
          "tag": "pie",
          "recipe_id": 73
        },
        {
          "id": 88,
          "tag": "sandwich",
          "recipe_id": 32
        },
        {
          "id": 89,
          "tag": "sandwich",
          "recipe_id": 22
        },
        {
          "id": 90,
          "tag": "pasta",
          "recipe_id": 46
        },
        {
          "id": 91,
          "tag": "seafood",
          "recipe_id": 55
        },
        {
          "id": 92,
          "tag": "salad",
          "recipe_id": 5
        },
        {
          "id": 93,
          "tag": "desserts",
          "recipe_id": 75
        },
        {
          "id": 94,
          "tag": "sandwich",
          "recipe_id": 55
        },
        {
          "id": 95,
          "tag": "pie",
          "recipe_id": 72
        },
        {
          "id": 96,
          "tag": "seafood",
          "recipe_id": 54
        },
        {
          "id": 97,
          "tag": "sandwich",
          "recipe_id": 15
        },
        {
          "id": 98,
          "tag": "pasta",
          "recipe_id": 71
        },
        {
          "id": 99,
          "tag": "seafood",
          "recipe_id": 19
        },
        {
          "id": 100,
          "tag": "seafood",
          "recipe_id": 54
        },
        {
          "id": 101,
          "tag": "pasta",
          "recipe_id": 6
        },
        {
          "id": 102,
          "tag": "desserts",
          "recipe_id": 12
        },
        {
          "id": 103,
          "tag": "pie",
          "recipe_id": 67
        },
        {
          "id": 104,
          "tag": "stew",
          "recipe_id": 71
        },
        {
          "id": 105,
          "tag": "pasta",
          "recipe_id": 39
        },
        {
          "id": 106,
          "tag": "seafood",
          "recipe_id": 26
        },
        {
          "id": 107,
          "tag": "seafood",
          "recipe_id": 24
        },
        {
          "id": 108,
          "tag": "salad",
          "recipe_id": 40
        },
        {
          "id": 109,
          "tag": "soup",
          "recipe_id": 1
        },
        {
          "id": 110,
          "tag": "desserts",
          "recipe_id": 13
        },
        {
          "id": 111,
          "tag": "pasta",
          "recipe_id": 44
        },
        {
          "id": 112,
          "tag": "stew",
          "recipe_id": 75
        },
        {
          "id": 113,
          "tag": "seafood",
          "recipe_id": 18
        },
        {
          "id": 114,
          "tag": "desserts",
          "recipe_id": 40
        },
        {
          "id": 115,
          "tag": "salad",
          "recipe_id": 76
        },
        {
          "id": 116,
          "tag": "sandwich",
          "recipe_id": 75
        },
        {
          "id": 117,
          "tag": "pie",
          "recipe_id": 55
        },
        {
          "id": 118,
          "tag": "pasta",
          "recipe_id": 38
        },
        {
          "id": 119,
          "tag": "desserts",
          "recipe_id": 30
        },
        {
          "id": 120,
          "tag": "desserts",
          "recipe_id": 56
        },
        {
          "id": 121,
          "tag": "desserts",
          "recipe_id": 79
        },
        {
          "id": 122,
          "tag": "desserts",
          "recipe_id": 26
        },
        {
          "id": 123,
          "tag": "desserts",
          "recipe_id": 5
        },
        {
          "id": 124,
          "tag": "seafood",
          "recipe_id": 2
        },
        {
          "id": 125,
          "tag": "seafood",
          "recipe_id": 31
        },
        {
          "id": 126,
          "tag": "sandwich",
          "recipe_id": 31
        },
        {
          "id": 127,
          "tag": "pasta",
          "recipe_id": 37
        },
        {
          "id": 128,
          "tag": "pie",
          "recipe_id": 69
        },
        {
          "id": 129,
          "tag": "stew",
          "recipe_id": 60
        },
        {
          "id": 130,
          "tag": "pasta",
          "recipe_id": 62
        },
        {
          "id": 131,
          "tag": "stew",
          "recipe_id": 12
        },
        {
          "id": 132,
          "tag": "desserts",
          "recipe_id": 33
        },
        {
          "id": 133,
          "tag": "pasta",
          "recipe_id": 79
        },
        {
          "id": 134,
          "tag": "sandwich",
          "recipe_id": 21
        },
        {
          "id": 135,
          "tag": "desserts",
          "recipe_id": 29
        },
        {
          "id": 136,
          "tag": "desserts",
          "recipe_id": 20
        },
        {
          "id": 137,
          "tag": "soup",
          "recipe_id": 11
        },
        {
          "id": 138,
          "tag": "pasta",
          "recipe_id": 72
        },
        {
          "id": 139,
          "tag": "pasta",
          "recipe_id": 3
        },
        {
          "id": 140,
          "tag": "stew",
          "recipe_id": 67
        },
        {
          "id": 141,
          "tag": "salad",
          "recipe_id": 58
        },
        {
          "id": 142,
          "tag": "pie",
          "recipe_id": 51
        },
        {
          "id": 143,
          "tag": "pie",
          "recipe_id": 74
        },
        {
          "id": 144,
          "tag": "pasta",
          "recipe_id": 55
        },
        {
          "id": 145,
          "tag": "sandwich",
          "recipe_id": 78
        },
        {
          "id": 146,
          "tag": "desserts",
          "recipe_id": 7
        },
        {
          "id": 147,
          "tag": "sandwich",
          "recipe_id": 7
        },
        {
          "id": 148,
          "tag": "soup",
          "recipe_id": 5
        },
        {
          "id": 149,
          "tag": "stew",
          "recipe_id": 47
        },
        {
          "id": 150,
          "tag": "seafood",
          "recipe_id": 35
        }
      ]);
    });
};

// [
//   '{{repeat(150)}}',
//   {
//     id: '{{index(1)}}',
//     tag: "{{random('pasta', 'pie', 'salad', 'soup', 'stew', 'seafood', 'desserts')}}",
//     recipe_id: '{{integer(1, 80)}}'
//   }
// ]
