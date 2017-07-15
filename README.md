## Get status of LiveEdu channel via Promise!
[![Build Status](https://travis-ci.org/johnnykramer/liveedu-status.svg?branch=master)](https://travis-ci.org/johnnykramer/liveedu-status)

### You just need to know the nickname.

    status.username(username:String)

#### Example:

      const status = require('liveedu-status');
    
      status.username('johnnykramer')
        .then((status) => {
          console.log(status)
        })