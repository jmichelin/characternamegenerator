/**
 * Created by jmichelin on 8/31/16.
 */
import {join} from 'path'

const include = join(__dirname, 'src')

export default {
    entry:  './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'randomCharacterName',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', include},
            {test: /\.json$/, 'loader': 'json', include}
        ]
    }
}