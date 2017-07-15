## Get status of LiveEdu channel via Promise!
### You just need to know the nickname.

    status.username(username:String)

#### Example:

      const status = require('liveedu-status');
    
      status.username('johnnykramer')
        .then((status) => {
          console.log(status)
        })