# reactDjango_Project2

Create a massively multiplayer online (MMO) raid game. Create a user and attack all of the monsters. Go to the shop to change weapons to deal more damage.

<strong>Note</strong>: Health has no mechanical purpose in the game, but should be included for the project. There is also no mechanical issues with the player to be below 0 health. To add more monsters and items use the restful or django admin panel. There are pictures in this repo of an ugly version of the completed project.

### Due Date: Monday, November 18 at 8am
### Presentation at 9am

# Requirements (Total of 20 points)

## Aesthetics (3 pts)
- 3pts: Content is presented in a clear manner that is easy to follow. Readers can get around your website with ease. There are no blind links. Content is simple and to the point. Whitespace is properly addressed on the page. 
- 2pts: Navigation is not intuitive. People reading it cannot find what they want quickly.
- 1pts: Confusing and difficult to follow. Site is somewhat difficult to navigate. Too much textual information.  Images are too large for the page.
- 0pt: Site is difficult to navigate. Not intuitive. Images are not implemented.

## Functionality (17 pts)

## Not Logged In (4 pts):
#### Root Page (3 pts):  
- There is a form to log in and a link to the new user page.  
- When you log in, validate against the username and password matching. If they are a match, log the user in.
- When you create a new user, validate against an existing user. If it's available, automatically log them in.  
#### New User (1 pt):  
- When you create a new user, validate against an existing user. If the username is available, automatically log them in. If the username is not available, show an error message on the screen.
- Adding a new user includes their username, password, and profile picture. When the user is created, automatically assign them a random health and attack number.
 
## Logged In (13 pts)
#### Root Page (2 pts):
 -You should see your user's name, profile picture, health, attack, and equipped item (if there is an equipped item).
#### Fight! (4 pts):
- Put the user's information at the top, and show a list of all monsters with greater than 0 health. Each monster should show their name, profile picture, health, attack, and a button with "Attack!". If you click on attack, the player's attack and weapon attack should be deducted from the monster's health. The monster's attack should also reduce the player's health.
#### Edit User (2 pts):
- This should allow the logged-in user to change their username, password, pictureURL.
#### Shop (4 pts):
- This will list all of the items available to the fighter. By clicking on the item's link, they can equip the item. You will be able to see the user's equipped weapon on the profile page.
#### Log Out (1 pt):
- This will log the user out.

******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************

## Challenge
If the user signs in with the credentials admin/admin, change the navigation links to be a page with a list of monsters and a page with a list of all items. Each monster/item should have it's statics next to it and be a link that allows edit and delete. There should also be a form that will allow the admin to create a new monster or user on that page.
