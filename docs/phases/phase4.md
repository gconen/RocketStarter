# Phase 4: Rewards

## Rails
### Models
* Reward

### Controllers

### Views
* projects/show.json.jbuilder (include reward information)

## Backbone
### Models
* Reward
* Project: add parsing of nested rewards infomation.

### Collections
Rewards

### Views
* Update ProjectShow (add contained RewardsIndex)
* RewardsIndex (composite view, contains RewardsIndexItem)
* RewardsIndexItem
* Update NewPledgeForm
* Update ProjectForm

## Gems/Libraries
