const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) :
	{
		comments:
			[

			],
		form:
			{
				name:'',
				comment:'',
			}
	}

export default function rootReducer (state = initialState, action) {

	switch (action.type) {
		case 'ADD_COMMENT':
			return {
				comments: [
					...state.comments,
					{
						id: Date.now(),
						name: state.form.name,
						text: state.form.comment,
						date: new Date().toLocaleString(),
					}
				],
				form:
					{
						name: '',
						comment: '',
					}
			};
		case 'DEL_COMMENT':
			return {
				comments: state.comments.filter(comment => comment.id !== action.id),
				form:
					{
						name: '',
						comment: '',
					}
			};
		case 'HANDLE_FORM':
			return {
				comments: [...state.comments],
				form: {
					...state.form,
					[action.textFieldName]: action.textValue,
				}
			};
		default:
			return state;
	}
}