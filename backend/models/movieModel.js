import mongoose from 'mongoose';

const movieSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		director: {
			type: String,
			required: true,
		},
		releaseYear: {
			type: Number,
			required: true,
		},
		cast: {
			type: Array,
			required: true
		}
	},
	{
		timestamps: true,
	}
);

export const Book = mongoose.model('Movie', movieSchema);