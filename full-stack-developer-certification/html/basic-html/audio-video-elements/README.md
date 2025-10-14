# Working with Audio and Video Elements

In these lessons, you will learn how to work with the `audio` and `video` elements.

## What Are the Roles of the HTML Audio and Video Elements, and How Do They Work?

The `audio` and `video` elements allow you to add sound and video content to your HTML documents. The `audio` element supports popular audio formats like mp3, wav, and ogg. The `video` element supports mp4, ogg, and webm formats.

To include audio content on your web page, you can use the `audio` element with the `src` attribute pointing to the location of your audio file.

As you can see in this [preview window](https://codesandbox.io/p/sandbox/tpk6cg?file=%2Findex.html), nothing shows up on the page.

-----------------------------------------------

If you want to see the audio player on the page, then you can add the `audio` element with the `controls` attribute.

Press play in this [preview window](https://codesandbox.io/p/sandbox/w73mtd) to hear one of Quincy Larson's songs. To hear a different song, change the src value to `"https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3"`.

-----------------------------------------------

*The `controls` attribute enables users to manage audio playback, including adjusting volume, and pausing, or resuming playback.* The `controls` attribute is a boolean attribute that can be added to an element to enable built-in playback controls. If omitted, no controls will be shown.

Apart from the `src` and `controls` attributes, there are several other attributes that enhance the functionality of the `audio` element. The `loop` attribute is a boolean attribute that makes the audio replay continuously.

Here's an [example](https://codesandbox.io/s/pyw3jx?file=%2Findex.html&utm_medium=sandpack) of using the `loop` attribute to play one of Quincy Larson's songs titled "Can't stay down". To see the looping in action, scrub the play head close the end of the song and it will restart again once it is finished.

-----------------------------------------------

Another attribute you can use is the `muted` attribute. *When present in the `audio` element, this boolean attribute will start the audio in a muted state.* Here's an [example](https://codesandbox.io/p/sandbox/7pjm3m) of using the `muted` attribute.

To hear the music, click on the volume icon in the audio player.

-----------------------------------------------

When it comes to audio file types, there are differences in which browsers support which type. To accommodate this, you can use `source` elements inside the `audio` element and the browser will select the first source that it understands. Here's an example of using multiple `source` elements for an `audio` element:

```<audio controls><source src="audio.ogg" type="audio/ogg" /><source src="audio.wav" type="audio/wav" /><source src="audio.mp3" type="audio/mpeg" /></audio>```

The browser will first start with the ogg type, and if it can't play the audio, then it'll move down to the next type in the list.

All the attributes we have learned so far are also supported in the `video` element. Here's an example of using a `video` element with the `loop`, `controls`, and `muted` attributes.

Add the `autoplay` attribute to the [opening `video` tag](https://codesandbox.io/p/sandbox/trfc23?file=%2Findex.html) so the video plays automatically.

**NOTE:** The `width` attribute is being used here to make the video smaller and fit better in the preview window. You will learn more about the `width` attribute in future lessons.

For the `src`, or source attribute, we are using a video called "Big Buck Bunny" from archive.org. *If you wanted to display an image while the video is downloading, you can use the `poster` attribute.* This attribute is not available for `audio` elements and is unique to the `video` element. Here's an example of using the `poster` attribute with content provided by peach.blender.org.

```<video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" loop controls muted poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" width="400"></video>```
