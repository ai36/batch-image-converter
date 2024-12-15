# batch-image-converter

It’s a batch image converter that turns **PNG** files into **JPG**, **WEBP**, and **AVIF**. It’s built on the [sharp converter](https://github.com/lovell/sharp), which itself relies on the [libvips library](https://github.com/libvips/libvips).
For instance, the popular [Squoosh](https://squoosh.app) tool uses the same library.

No frills or extra features here. I made it purely for my own use.

## Вefore Running

```npm install```

## Running

```node index.js```

## How to use

Put the **PNG** images to source folder:

Source folder: /src/img<br>
Source images format: **PNG**

Get the converted images from destination folder:

Destination folder: /dist/img<br>
Destination images formats: **JPG** + **WEBP** + **AVIF**

The filename does not change. The resolution does not change. All settings are default.