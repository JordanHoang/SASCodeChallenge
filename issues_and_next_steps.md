# Issues

## jService / Ruby & Rails 
- I couldn't figure out how to get jService to run properly. I was at the `rails s` step, but ran into different issues with it attempting to build. 

- If I were to have been able to succesfully get that working, I would have ran the `rake[12, 13]` command to retrieve seasons 12 AND 13 as it looked like Season 12 ran from 09-04-1995 to 07-19-1996, and Season 13 ran from 09-02-1996 to 07-18-1997 (according to http://j-archive.com/listseasons.php). So I wanted to make sure I got all the clues from 1996.

- Instead, I was able to figure out how to retrieve that data through the jService HTTP API

- Ideally, if I were to have imported all the desired clues, I could store the information locally, and set up the node.js backend to retrieve the clues from a DB, format it, and then serve it up to the frontend in the desired format.

# Next Steps

## Transition from Mock Data to Live Data

- The data stored in my mock-data.js file are actual clues I retrieved from the jService API. And they are filtered on the science category, as well as the airdate of 1996.

- What I wasn't able to do is take the entire HTTP response and somehow filter and format that JSON Response into something that fit with my flow.

- I wanted to take the response (all the clues that were returned) and parse through it to pick out a 100, 200, 300, 400, and 500 point clue. And then format it to be displayed in the column.

- And then like I mentioned in the jService issue, I would like to move this live data to the backend, and run a local API to retrieve that data.

## Architected For Expansion

- I attempted to set up my project for future cases on expanding the board greater than one column.