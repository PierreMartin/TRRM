import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  title: { type: String, default: '' },
	description: { type: String, default: 'no description' },
	price: { type: Number, min: 0, default: 10 }
});

export default mongoose.model('Course', CourseSchema);
