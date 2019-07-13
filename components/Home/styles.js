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
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	msgInputText: {
		width: 280,
		height: 50,
		paddingHorizontal: 15,
		paddingVertical: 5,
		alignItems: 'flex-start',
		borderColor: constants.Colors.black,
		borderWidth: 0.5,
		borderRadius: 25,
		fontSize: 18,
		marginRight: 10,
	},
})

export default styles