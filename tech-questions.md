# How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent around 6 hours on this assignment. If I had more time I would add more refine options and have links/suggestions to other restaurants within each restaurant card. I would also implement more animations with framer-motion and perhaps include a google maps embed for the addresses. If I had access to the paid features of the api, I would include reviews and slideshow pictures.

# What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I quite like hooks from react which lets you use states in stateless functions. Lifecycle hooks are also very convenient to modify with useEffect. It can pass through states as a parameter to monitor any updates:

```javascript
useEffect(() => {
    async function apiFetch() {
      try {\
        const movieAPI = await fetch(\
          "https://www.omdbapi.com/?apikey=2be7a6b9&s=" +search + "&type=movie"
        );\
        movieData = await movieAPI.json();
        if (movieData.Response !== "False") {
          setMovie((state) => movieData.Search);
        }
      } catch {
        console.log("error");
      }
    }
    if (search !== "") {
      apiFetch();\
    }
  }, [search, nomList]);
```

In this example I used the hook to monitor two states akin to componentDidUpdate lifecycle. And when the states are updated, the api is called.

A new feature for bootstrap 5 that I've used/enjoyed is the ability to color links on class and control hover color as well.

# How would you track down a performance issue in production? Have you ever had to do this?

First I would try to diagnose the problem to have a more methodic approach. Different issues require different tools, and it would be a waste of time and resources to try to fix something when you don't know where the problem lies.

For api related problems, we can look at the network tab in devtools. It can give you the time, timeline and requests of api calls.

For React components I would use devTools to profile components. The performance tab lets you record and trace if components are mounting, updating, and unmounted at what times, and frequencies.  
Redux devtools can also track state and component history.

It is also important to check lifecycle functions to avoid loops in performance.

I don't have much experience testing performance issues but I believe a diagnostic approach is best. Assessment of problems leads to more efficient and accurate solutions.

# How would you improve the API that you just used?

I would have the /search request implement a filter for cities to determine entity/city id. This prevents having to call the api twice in order to get the city id to use in another call. I would also increase the count maximum value on the /search request to match the 100 available. This allows for an aggregate instead of having to modify the start parameter.

# Please describe yourself using JSON.

```json
{
  "firstName": "Eric",
  "lastName": "Tien",
  "hair": "long",
  "origin": "scarborough",
  "isAlive": true,
  "hobbies": {
    "basketball": {
      "sport": "recreation",
      "entertainment": "NBA",
      "fantasy": "Yahoo"
    },
    "books": {
      "genres": ["sci-fi", "fantasy", "fiction"],
      "url": "https://www.goodreads.com/review/list/10695699-eric-tien?shelf=read"
    },
    "boardgames": {
      "categories": ["social", "euro", "tabletop", "resource management"]
    },
    "music": {
      "collection": "vinyl",
      "url": "https://www.discogs.com/user/eric.tien.13/collection"
    },
    "movies": {
      "ratings": "https://www.imdb.com/user/ur64374978/ratings"
    }
  }
}
```
