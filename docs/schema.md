# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null
description | text      | not null
goal_amount | integer   | not null
image_url   | string    | not null
expiration  | date      | not null

## pledges
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key
sponsor_id  | integer   | not null, foreign key (references users)
amount      | integer   | not null
reward_id   | integer   | foreign key

## rewards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key
amount      | integer   | not null
description | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
