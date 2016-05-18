/* 
App Store Analytics Pseudocode
Using BucketAdmin Bootstrap Theme

*************************************
HEX colors in AI file:

Reds:
#EF5948
#C8493B

Blues:
#AFD1D0
#7ABCC1

*************************************

~ Global Clock
	- Uses moment.js
			(http://momentjs.com/)
		* Will detect the date and time
		* Moment timezone can be used to detect each timezone for the dropdown menu
	- Drop down menu for different time zones
		* Moment.js timezone
			(http://momentjs.com/timezone/)
	- Styled with CSS / Bootstrap / choice framework
	- Clock can be created three ways
		* HTML5 Canvas
		* CSS animation property
			(https://cssanimation.rocks/clocks/)
		* BucketAdmin's Clock Widget
			(http://bucketadmin.themebucket.net/widget.html)
				- This relies on a JS interaction
				- Not sure if this would play well with moment.js
	- Having multiple time zones is important because apps that launch at midnight in certain places 
	will not launch at midnight in others.
		* Allows us to convert that time easier

~ Toolbar
	- Simple HTML & CSS Build
	- Detect which user is logged in
		* Display this information on left hand side
	- Allows the user to see any Notifications or Messages they may have
	- Allows the user to Search through our App Store
	- Notifies the user of their user status
		* Super Admin
		* Admin
		* Moderator
		* Developer
		* User
	- Notifications, Messages, and Search icons floated right
		* All drop down menus
		* Display information specific to that user
	- This relies heavily upon user information
	- User MUST be logged in for anything to display

~ App Updates Section
	- Used to show which Applications have recently been updated, added, or deleted from our database.
		(https://sqlandme.com/2014/03/11/sql-server-how-to-get-last-accessupdate-time-for-a-table/)
	- Important because it keeps admins up to date on the status of apps in our store
	- Put this information into a table and stylize
	- moment.js can humanize the date if we'd like
		* Will say "one hour ago" rather than the time it was created
	- Would like to have this update in real time

~ Visitors Per Hour
	- Very important for an App Store because it allows us to know about our popularity with the masses
	 	* If popularity is going down, it's time to invest in some advertising
	- Use bucketadmin's bootstrap theme
		* Has pre-made charts that would suit this perfectly
		* See "Area Chart"
			(http://bucketadmin.themebucket.net/chartjs.html)
		* "Area Chart" from this section would also look nice
			(http://bucketadmin.themebucket.net/flot_chart.html)

~ Most Popular Apps
	- Very important for an App Store because it allows us to know about our popularity with the masses
		* More popular apps make more revenue
		* More popular apps can be turned into other product
			- Think Angry Birds franchising
		* More popular apps will make more money off of advertising
	- Styled section
	- Displays database information
		* Ordered by highest grossing applications
		* Displays App Name
		* Displays Number of Downloads
		* Displays Total Revenue
	- Possible horizontal scroll to see more apps?
		* Would need to use Carousel
			- These are often frowned upon these days
			- Look into alternatives
			- If not, just top 3 or 4 visible

~ Daily Planner / To Do List
	- Basic to do list
	- A handy widget to have for Super Admin, Admin, Moderators, and Developers
		* Users do not need this widget and therefore it will not display for them
	- Allows us to keep track of what needs to be done while we are logged in for the day
		* If tasks are not completed, keep them on the list until tomorrow
			- Therefore must be stored in a database
	- Offered through BucketAdmin
		(http://bucketadmin.themebucket.net/index.html)
		* It's called Event List on BucketAdmin
	- Can also be coded out by hand if necessary
		* Simple CRUD

~ Daily Sales
	- Very important for an App Store because it allows us to know about our business revenue
		 	* If revenue is going down, it's time to invest in some company changes
	- Use bucketadmin's bootstrap theme
		* Has pre-made charts that would suit this perfectly
		* See "Bar Chart"
			(http://bucketadmin.themebucket.net/chartjs.html)

~ Users
	- A pie chart that allows us to see the number of ACTIVE users that we have as well as the percentage of
	which belong to each user category 
		* Super Admin
		* Admin
		* Moderator
		* Developer
		* User
			- A user is determined to be ACTIVE if they have logged in to the system within the past month
	- Use bucketadmin's bootstrap theme
		* Has pre-made charts that would suit this perfectly
		* See "Donut Chart"
		(http://bucketadmin.themebucket.net/morris.html)
				- Notice that it has the text in the center of the donut, just as is mocked up in the AI file.
		* Alternatively, "Donut Chart" or "Pie Chart" from here would also work
			(http://bucketadmin.themebucket.net/chartjs.html)

*/