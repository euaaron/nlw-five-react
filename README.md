# ![](https://raw.githubusercontent.com/euaaron/nlw-five-react/development/public/PodcastrHeader.jpg)

[![Deployment Status](https://vercelbadge.vercel.app/api/euaaron/nlw-five-react?style=flat-square)](https://podcastr.euaaron.codes)


## Summary

1. [About](#about)
2. [Technologies](#technologies)
3. [Running it Locally](#running-it-locally)
4. [License](#license)
5. [To Do](#to-do)
6. [Contributing](#contributing)
7. [Author](#author)
8. [Credits](#credits)

### About

Podcastr is a web app where you can listen to episodes of **FalaDev** Podcast.
This project has been made during [Next Level Week](https://nextlevelweek.com/) edition 5 with lessons of the React.js path.

#### Technologies

1. Node - Javascript Runtime
2. React - a javascript library
3. Next.js - an extremely powerfull React Framework
4. Typescript - a JavaScript superset that brings data types and other usefull functionalities to JavaScript
5. Styled-Components - a css in javascript library that is highly useful to do conditional styling
6. Axios - used to work as an HTTP client and get data from the API in a way more organized than with `fetch`

### Running it Locally

If you wanna run it locally: 

1. run `yarn` or `npm install` like any other Node.js project;
2. create a `.env` file with `API_URL` passing `http://localhost:3333` as value, for example;
3. run `yarn server`;
4. run `yarn dev`.

To `build` and `start` the project you need to be with the json-server running.

>  To deploy it online you will need to have an API to be already deployed and running somewhere and then add it's connection string (URL) to the environment variables of the platform where you are deploying the project. Deploy will fail if you ignore this step.

### License

This is an academic project... You are rectricted to learn with it, copy, edit and... common, it's a free and open project, you can do ANYTHING that you want and this will never change!

### To Do

- [x] create this readme - 10
- [ ] bring back json-server, so I will not be lying in the "Run it Locally" section - 10
- [ ] create different themes and a option to change it from a button, menu or dropdown - 8
- [ ] create a playlist where person can add only the podcasts that she wants to hear - 5
- [ ] add a way to allow repeat only once instead repeating forever - 8
- [ ] add a way to repeat the full playlist instead of a episode - 10
- [ ] create a real external API with more episodes to show - 3

### Contributing

> First, lets understand the **To Do** list. 
> The numbers of this To Do represents a confidence level from 0 to 10 where higher number means more confidence so the lowest, the number the harder and/or time consuming I think it is. 

1. You can create you own tasks to improve the project but **If you are a begginner I recommend to start with a level 10 task**.
2. Instead of adding more To Do itens here, create tasks as ISSUES are it is a easier way to organize tasks if the project grows.
3. Do semantic commits where we can see what was changed without needing to look the code.

### Author

<a href="https://github.com/euaaron">
  <img style="height:auto;" alt="" width="64" height="64" src="https://github.com/euaaron.png" />
</a>

### Credits

<a href="https://github.com/diego3g">
  <img style="height:auto;" alt="" width="64" height="64" src="https://github.com/diego3g.png" />
</a>
<a href="https://github.com/Roketseat">
  <img style="height:auto;" alt="" width="64" height="64" src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4" />
</a>
<a href="https://github.com/zenorocha">
  <img style="height:auto;" alt="" width="64" height="64" src="https://github.com/zenorocha.png" />
</a>

As this project was made during a [Rocketseat](https://github.com/Rocketseat)'s event I can't forget to credit their staff for preparing the amazing lessons that directed this project to it's completion and of course [Diego Fernandes](https://github.com/diego3g) for his amazing didatics.

Also I've used [Dracula Theme](https://draculatheme.com/) (Classic) colors to define the default theme of this project, for that I also credit it's creators.
