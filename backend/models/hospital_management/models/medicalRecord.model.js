import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
  patientId: {}}, {timestamps: true});

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
