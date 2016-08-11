export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).
    Note: these only affect routes defined *after* them!
  */

  this.get('/tournaments', function(db, request) {
    let tournaments = [
      {
        type: 'tournaments',
        id: 1,
        attributes: {
          "title": "SSOVA",
          "date": "August 13, 2016",
          "location": "Miami beach, FL",
          "divisions": "All"
        }
      },
      {
        type: 'tournaments',
        id: 2,
        attributes: {
          "title": "AVP",
          "date": "September 3, 2016",
          "location": "Clearwater beach, FL",
          "divisions": "All"
        }
      },
      {
        type: 'tournaments',
        id: 3,
        attributes: {
          "title": "EEVB",
          "date": "September 13, 2016",
          "location": "Hermosa beach, CA",
          "divisions": "All"
        }
      },
      {
        type: 'tournaments',
        id: 4,
        attributes: {
          "title": "EEVB",
          "date": "October 9, 2016",
          "location": "Jacksonville beach, FL",
          "divisions": "All"
        }
      },
      {
        type: 'tournaments',
        id: 5,
        attributes: {
          "title": "SSOVA",
          "date": "October 13, 2016",
          "location": "Clearwater beach, FL",
          "divisions": "All"
        }
      },
      {
        type: 'tournaments',
        id: 6,
        attributes: {
          "title": "SSOVA",
          "date": "November 23, 2016",
          "location": "Siesta Key, FL",
          "divisions": "All"
        }
      },
      {
        type: 'tournaments',
        id: 7,
        attributes: {
          "title": "AVP",
          "date": "December 1, 2016",
          "location": "Clearwater beach, FL",
          "divisions": "All"
        }
      }
    ];

    if (request.queryParams.location !== undefined) {
      let filteredTournaments = tournaments.filter(function (i) {
        return i.attributes.location.toLowerCase().indexOf(request.queryParams.location.toLowerCase()) !== -1;
      });
      return { data: filteredTournaments };
    } else {
      return { data: tournaments };
    }

  });


  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:
    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}

