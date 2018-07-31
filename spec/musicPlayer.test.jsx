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

jest.useFakeTimers()

describe('<MusicPlayer />', () => {
  // moment.tz.setDefault('Asia/Hovd')

  it('shallow renders correctly', () => {
    const wrapper = shallow(
      <MusicPlayer />
    );
    expect(wrapper).toMatchSnapshot();
  });

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

  it('Should change state of show modal after a click', () => {
    const wrapper = shallow(<MusicPlayer />);
    wrapper.find('AlbumArtContainer').simulate('click');
    const modalState = wrapper.state().showModal;
    expect(modalState).toEqual(true);
  });

  it('Should call window alert after a click on Artist', () => {
    window.alert = jest.fn(()=>true);
    const wrapper = shallow(<MusicPlayer />);
    wrapper.find('Artist').simulate('click');
    expect(window.alert).toHaveBeenCalledWith('This would go to the artist page if we had it implemented!');
  });

  it('Should call window alert after a click on Album', () => {
    window.alert = jest.fn(()=>true);
    const wrapper = shallow(<MusicPlayer />);
    wrapper.find('Album').simulate('click');
    expect(window.alert).toHaveBeenCalledWith('This would go to the album page if we had it implemented!');
  });

  it('Should call window alert after a click on genre', () => {
    window.alert = jest.fn(()=>true);
    const wrapper = shallow(<MusicPlayer />);
    wrapper.find('Genre').simulate('click');
    expect(window.alert).toHaveBeenCalledWith('This would go to the genre page if we had it implemented!');
  });

  it('Should change the state of the modal back to false after clicking twice', () => {
    const wrapper = shallow(<MusicPlayer />);
    wrapper.find('AlbumArtContainer').simulate('click');
    wrapper.find('ModalBackground').simulate('click');
    const modalState = wrapper.state().showModal;
    expect(modalState).toEqual(false);
  });

  it('Modal should not exist', () => {
    const wrapper = shallow(<MusicPlayer />);
    wrapper.find('AlbumArtContainer').simulate('click');
    const modalState = wrapper.state().showModal;
    expect(wrapper.find('AlbumModal').exists()).toEqual(true);
  });

  it('calls componentdidmount', () => {
    sinon.spy(MusicPlayer.prototype, 'componentDidMount');
    const wrapper = mount(<MusicPlayer />);
    expect(MusicPlayer.prototype.componentDidMount.calledOnce).toEqual(true);
  });

  it('changes state of play when clicked', () => {
    const wrapper = mount(<MusicPlayer />);
    wrapper.find('PlayButtonContainer').simulate('click')
    const playState = wrapper.state().play;
    expect(playState).toEqual(true);
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
