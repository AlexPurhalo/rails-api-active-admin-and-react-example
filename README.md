## Rails API with ActiveAdmin

### Usage
1. `$ bundle install`
2. Setup your databases for postgresql
3. `$ rake db:migrate`
4. `$ rake db:seed`
5. `$ cd client && npm install`
7. `$ rake start`
8. Visit http://localhost:3000/ and ensure that there no errors in console
9. Visit http://localhost:3001/admin in browser
9. to login use ```admin@example.com``` with ```password``` password


### Production
1. $ heroku create
2. $ heroku buildpacks:add heroku/nodejs --index 1
3. $ heroku buildpacks:add heroku/ruby --index 2


### GraphQL usage
```
	curl -XGET http://localhost:3000/api/ingredients -d "query={
		ingredient(id: 1) {
			description
		}
	}"
``` 
