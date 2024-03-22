import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header className='my-6'>
            <div className="hero bg-[url('/src/assets/images/bg.png')] bg-cover bg-center py-[100px]">
                <div className="hero-content flex-col-reverse lg:flex-row gap-10">
                    <div className='bg-[#FFF] rounded-lg shadow-lg'>
                        <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        />
                    </div>
                    <img src={chair} className="rounded-lg md:w-1/2 shadow-2xl" alt='dentist Chair' />
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;