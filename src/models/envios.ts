import mongoose from 'mongoose';

interface Envios extends mongoose.Document {
  from: string;
  tracking_id: string;
  status: string;
  address: string;
}

const enviosSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
      trim: true,
    },
    tracking_id: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Envios>('Envios', enviosSchema);
