/*
 * Copyright 2016 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const webpack = require('webpack');
const baseConf = require('./webpack-base.conf');
const clone = require('clone');
const webpackConf = clone(baseConf);

webpackConf.module.loaders = webpackConf.module.loaders.concat([
  {
    test: /\.scss$/,
    loaders: [
      'style',
      'css?sourceMap',
      'postcss?sourceMap',
      'sass?sourceMap',
    ],
  },
]);

webpackConf.plugins = webpackConf.plugins.concat([
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].js',
    minChunks: Infinity,
  }),
  new webpack.HotModuleReplacementPlugin,
]);

webpackConf.debug = true;
webpackConf.devtool = 'inline-eval-cheap-source-map';

module.exports = webpackConf;