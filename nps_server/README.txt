Install dependencies:
$ npm install

Start the server:
$ npm run start

Config:
Host: http://localhost
Port: 4000

Paths:
POST /add_rating
Adds an entry with an user's rating and comments to the store.
Expects json object in the form:
{
    "rating": <integer_required>,
    "comment": "<string_optional>"
}

GET /get_ratings
Returns all saved ratings and comments.

DELETE /delete_ratings
Deletes all saved ratings.

GET /get_nps_score
Returns nps score.