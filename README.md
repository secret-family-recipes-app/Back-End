# cookbook-BE
Secret Family Recipe Cookbook - Backend

Section Contents:
- [https://secretfamilyrecipes.herokuapp.com/auth/login POST](#authlogin-post)
- [https://secretfamilyrecipes.herokuapp.com/auth/register POST](#authregister-post)
- [https://secretfamilyrecipes.herokuapp.com/recipes GET](#recipes-get)
- [https://secretfamilyrecipes.herokuapp.com/recipes POST](#recipes-post)
- [https://secretfamilyrecipes.herokuapp.com/recipes/:id GET](#recipesid-get)
- [https://secretfamilyrecipes.herokuapp.com/recipes/:id PUT](#recipesid-put)
- [https://secretfamilyrecipes.herokuapp.com/recipes/:id DELETE](#recipesid-delete)

### https://secretfamilyrecipes.herokuapp.com/auth/login POST

Expects an object with this format as the request body:
```
{
  "username": "User1",   //string
  "password": "password" //string
}
```

### https://secretfamilyrecipes.herokuapp.com/auth/register POST

Expects an object with this format as the request body:
```
{
  "username": "User1",   //string
  "password": "password" //string
}
```

### To make authenticated requests to the API

```
import { axiosWithAuth } from '../axiosWithAuth.js';
```

### https://secretfamilyrecipes.herokuapp.com/recipes GET

Example request to get all recipes for the authenticated user:
```
axiosWithAuth().get('https://secretfamilyrecipes.herokuapp.com/recipes')
          .then(result => console.log(result))
          .catch(err => console.log(err));
    }
```

Response data:

```
  "recipes": [
        {
            "id": 2,
            "user_id": 1,
            "title": "Pomello",
            "source": "Lester",
            "notes": "Re-engineered empowering workforce",
            "tags": [
                "pie",
                "seafood"
            ]
        },
        {
            "id": 7,
            "user_id": 1,
            "title": "Wine - Ej Gallo Sierra Valley",
            "source": "Winnie",
            "notes": "Function-based global attitude",
            "tags": [
                "soup",
                "desserts",
                "sandwich"
            ]
        }
```

### https://secretfamilyrecipes.herokuapp.com/recipes POST

Example request to create a recipe:

```
    const requestData = {
        "title": "Pomello",
        "source": "Lester",
        "notes": "Re-engineered empowering workforce",
        "ingredients": [
            "Creme De Menth - White"
        ],
        "instructions": [
            "curabitur convallis duis consequat dui nec nisi volutpat eleifend",
            "venenatis lacinia aenean sit amet justo morbi ut odio cras"
        ],
        "tags": [
            "pie",
            "seafood"
        ]
    }

axiosWithAuth().post('https://secretfamilyrecipes.herokuapp.com/recipes', recipeData)
          .then(result => console.log(result))
          .catch(err => console.log(err));
    }

```

### https://secretfamilyrecipes.herokuapp.com/recipes/:id GET

Requires an `authorization` header with a JWT. The object represents the recipe with the ID specified in the path:
```
  "recipe": {
        "id": 2,
        "user_id": 1,
        "title": "Pomello",
        "source": "Lester",
        "notes": "Re-engineered empowering workforce",
        "ingredients": [
            "Creme De Menth - White"
        ],
        "instructions": [
            "curabitur convallis duis consequat dui nec nisi volutpat eleifend",
            "venenatis lacinia aenean sit amet justo morbi ut odio cras"
        ],
        "tags": [
            "pie",
            "seafood"
        ]
    }
```

### https://secretfamilyrecipes.herokuapp.com/recipes/:id PUT

Requires an `authorization` header with a JWT. Expects an object with this format as the request body:
```
    {
        "title": "Pomello",
        "source": "Lester",
        "notes": "Re-engineered empowering workforce",
        "ingredients": [
            "Creme De Menth - White"
        ],
        "instructions": [
            "curabitur convallis duis consequat dui nec nisi volutpat eleifend",
            "venenatis lacinia aenean sit amet justo morbi ut odio cras"
        ],
        "tags": [
            "pie",
            "seafood"
        ]
    }
```

### https://secretfamilyrecipes.herokuapp.com/recipes/:id DELETE

Requires an `authorization` header with a JWT. Deletes the selected recipe if it exists and is associated with the current user.