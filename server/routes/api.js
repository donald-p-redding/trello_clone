const express = require ('express')
const router = express.Router()
const boardsController = require("../controllers/boardsController")
const listsController = require("../controllers/listsController")
const cardsController = require("../controllers/cardsController")
const { validateBoard, validateList, validateUpdateListTitle } = require("../validators/validators")

router.get('/boards/:id', boardsController.getBoard)
router.get('/boards', boardsController.getBoards )
router.post('/boards', validateBoard, boardsController.createBoard)

router.post('/lists', validateList, listsController.createList)
router.put('/lists/:id', validateUpdateListTitle, listsController.updateListTitle)

router.get('/cards/:id', cardsController.getCard)

module.exports = router


/*## 1.8. POST /api/cards

Creates a card. This also generates a card action describing that the card was added to the given list.

### 1.8.1. Expected Payload

NOTE: The `listId` where the card will reside is required.

```json
{
  "listId": 13,
  "card": {
    "title": "My new card"
  }
}
```

### 1.8.2. Successful Response

The new card is returned in JSON format with a 201 response status code.

#### 1.8.2.1. Example Response

```json
{
  "_id": 9,
  "title": "My new card",
  "description": "",
  "labels": [],
  "listId": 13,
  "position": 65535.0,
  "archived": false,
  "createdAt": "2020-10-08T17:54:55.285Z",
  "updatedAt": "2020-10-08T17:54:55.285Z",
  "dueDate": null,
  "completed": false,
  "boardId": 1,
  "comments": [],
  "actions": []
  "commentsCount": 0
}
```

### 1.8.3. Error Response

If an invalid (or no) `listId` is provided, an error will be returned with a 404 response status code. The only required field is the title. If no title (or a blank one) is provided, a 422 “Unprocessable Entity” status code will be returned along with an error describing the problem.
*/