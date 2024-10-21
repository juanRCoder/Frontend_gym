import PropTypes from 'prop-types';

export const TitleCustom = ({ textPrimary, textSecondary }) => {
   return (
      <p className='w-fit mx-auto text-center uppercase font-medium text-3xl md:text-5xl'>
         <span className={`block`}>{textPrimary}</span>
         <span className={`text-[#f4af00]`}>{textSecondary}</span>
      </p>
   );
};

TitleCustom.propTypes = {
   textPrimary: PropTypes.string.isRequired,
   textSecondary: PropTypes.string.isRequired,
};
