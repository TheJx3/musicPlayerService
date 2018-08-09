# Project Name

> Project description

Create
POST /songs/:id
{
    _id: Number,
  title: String,
  artist: String,
  genre: String,
  album: String,
  albumArt: String,
  songFile: String,
  createdAt: Number
}

Read
GET /songs/:id
{
  _id: Number,
  title: String,
  artist: String,
  genre: String,
  album: String,
  albumArt: String,
  songFile: String,
  createdAt: Number
}

Update
PUT /songs/:id/title/:title
{
  _id: Number,
  title: String,
}

PUT /songs/:id/artist/:artist
{
  _id: Number,
  artist: String,
}

PUT /songs/:id/genre/:genre
{
  _id: Number,
  genre: String,
}

PUT /songs/:id/album/:album
{
  _id: Number,
  album: String,
}

PUT /songs/:id/albumart/:albumArt
{
  _id: Number,
  albumArt: String,
}

PUT /songs/:id/songfile/:songFile
{
  _id: Number,
  songFile: String,
}

PUT /songs/:id/createdat/:createdat
{
  _id: Number,
  createdAt: Number,
}


Delete
DELETE songs/:id
{
  _id: Number,
}

## Related Projects

  - https://github.com/TheJx3/suggestedTracksService
  - https://github.com/TheJx3/commentsListAndSubmissionsService
  - https://github.com/TheJx3/musicPlayerService

## Table of Contents

1. [Usage](npm install)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

# videoPlayerSkeletonService
# videoPlayerSkeletonService
