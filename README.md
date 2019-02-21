# Organizational Relationship

[Live!](https://rhabit-challenge.herokuapp.com/#/)
 * Please note the live site is currently on Heroku Hobby Dynos, so please allow a couple seconds for it to get up and running *

This project was to build a RESTful web API and a simple front-end experience that allows users to create, read, update, and destroy organizational relationship data that would be used to build an organizational chart using a React.js front-end and Ruby on Rails back-end.


## Features

![alt text](https://github.com/jonathanahn95/rhabit_challenge/blob/master/app/assets/images/header.png "Logo Title Text 1")


A visitor to can browse the entire hierarchy by selecting `view all` at any point and also `add` a user.

### Rendering the hierarchy
``` javascript
  renderSubs(directReports) {
    if (directReports.length > 0) {
      return <ul>{this.renderHierarchy(directReports)}</ul>;
    }
  }

  renderHierarchy(data) {
    return data.map((userNode, index) => {
      return (
        <UserNode
          id={userNode.id}
          key={userNode.id}
          fname={userNode.fname}
          lname={userNode.lname}
          title={userNode.title}
          deleteUser={this.props.deleteUser}
          fetchUsers={this.props.fetchUsers}
        >
          {this.renderSubs(userNode.direct_reports)}
        </UserNode>
      );
    });
  }
```

Rendering the hierarchy is implemented by mapping over `data` which are users, and recursively calling `renderHierarchy` with the users direct reports. A user is being passed to a UserNode React component where the HTML for the app is getting rendered.

### View subsection of the organizational relationship

A user has to just click on the user's name to view their direct reports.



### Remove User From Hierarchy
``` ruby
    def self.reassign_subs_manager(employee, sup)
      unless employee.subordinates.blank?
        employee.subordinates.each do |emp|
            emp.manager_id = sup.id
          emp.save
        end
      end
    end
```

When a visitor removes a user from the hierarchy, all of the users subordinates are reassigned to the user's manager before deleting the user from the database.

### Editing a User
 ``` javascript
 export const getFilteredUsers = (users, userSubs) => {
  let userNames = [];
  for (let i = 0; i < users.length; i++) {
    if (!userSubs.includes(users[i].id)) {
      userNames.push(users[i]);
    }
  }

  return userNames;
};
```
The function is getting passed all users and a specific user's subordinates. The return value will be all of users who are not a user's subordinate. The user's manager can then get reassigned to the remaining list of users.
