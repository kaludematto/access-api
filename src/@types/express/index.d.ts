declare global {
    namespace Express {
        interface Request {
            brand: IBrandInfo | null;
            user: TUserToToken;
            doctor: TDoctorToToken;
        }
    }
}
