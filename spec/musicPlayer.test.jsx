import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';
import 'jest-styled-components'
import moment from 'moment-timezone'

import MusicPlayer from '../client/src/components/musicPlayer';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

Enzyme.configure({ adapter: new Adapter() });

describe('<MusicPlayer />', () => {
  // moment.tz.setDefault('Asia/Hovd')

  it('shallow renders correctly', () => {
    const wrapper = shallow(
      <MusicPlayer />
    );
    expect(wrapper).toMatchSnapshot();
  });

  // it('Renders a mounted version in the DOM', () => {
  //   const wrapper = mount(
  //     <MusicPlayer />
  //   );
  //   expect(wrapper).toMatchSnapshot();
  // });

  it('Should load the page with the music initially not be playing', () => {
    const wrapper = shallow(<MusicPlayer />);

    const playState = wrapper.state().play;
    expect(playState).toEqual(false);
  });

  it('Should load the page with the modal not showing', () => {
    const wrapper = shallow(<MusicPlayer />);

    const modalState = wrapper.state().showModal;
    expect(modalState).toEqual(false);
  });

  it('Should have node Album', () => {
    const wrapper = shallow(<MusicPlayer />);
    expect(wrapper.find('Album').exists()).toEqual(true);
  });

  it('Should have node Artist', () => {
    const wrapper = shallow(<MusicPlayer />);
    expect(wrapper.find('Artist').exists()).toEqual(true);
  });

  it('Should have node PlayButton', () => {
    const wrapper = shallow(<MusicPlayer />);
    expect(wrapper.find('PlayButton').exists()).toEqual(true);
  });

  it('Should have node AlbumArt', () => {
    const wrapper = shallow(<MusicPlayer />);
    expect(wrapper.find('AlbumArt').exists()).toEqual(true);
  });
});

// import puppeteer from 'puppeteer';

// const pageUrl = 'http://localhost:6969/';

// let page;
// let browser;
// const width = 1280;
// const height = 720;

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: [`--window-size=${width},${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({ width, height });
// });

// afterAll(() => {
//   browser.close();
// });
