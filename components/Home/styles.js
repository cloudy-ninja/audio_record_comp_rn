import { StyleSheet } from 'react-native'
import constants from '../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: constants.Colors.white,
	},
	row: {
		paddingHorizontal: 10,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	msgInputText: {
		width: '85%',
		height: 40,
		paddingHorizontal: 15,
		paddingVertical: 5,
		alignItems: 'flex-start',
		borderColor: constants.Colors.black,
		borderWidth: 0.5,
		borderRadius: 20,
		fontSize: 18,
	},
	recordButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: constants.Colors.purple,
		justifyContent: 'center',
		alignItems: 'center',
	},
	recordingButton: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: constants.Colors.purple,
		justifyContent: 'center',
		alignItems: 'center',
	},
	recordingView: {
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	lockButton: {
		width: 60,
		height: 180,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: constants.Colors.gray,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		marginBottom: 10,
	},
	stopButton: {
		width: 60,
		height: 60,
		backgroundColor: constants.Colors.red,
		marginBottom: 10,
	},
	stopOuterRectangle: {
		width: '100%',
		height: '100%',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		backgroundColor: constants.Colors.gray,
		justifyContent: 'center',
		alignItems: 'center'
	},
	stopInnerRectangle: {
		width: 20,
		height: 20,
		backgroundColor: constants.Colors.purple,
	},
	playButton: {
		width: 36,
		height: 36,
		borderRadius: 18,
		backgroundColor: constants.Colors.gray,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default styles