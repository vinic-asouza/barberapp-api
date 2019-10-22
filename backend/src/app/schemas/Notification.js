import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        user: {
            type: Number,
            required: true,
            default: false,
        },
        read: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Notification', NotificationSchema);
