import {Namer} from '@parcel/plugin';
import path from 'path';

export default new Namer({
	name({bundle}) {
		if (bundle.type === 'css') {
			const fp   = bundle.getMainEntry().filePath;
			const ext  = path.extname(fp);
			const name = path.basename(fp, ext);
			return `${name}.min${ext}`;
		}
		return null;
	}
});
