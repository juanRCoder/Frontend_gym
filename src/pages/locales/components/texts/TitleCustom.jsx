import PropTypes from 'prop-types';

export const TitleCustom = ({ textPrimary, textSecondary }) => {
   return (
      <h1 className='w-fit mx-auto text-center uppercase font-medium text-3xl md:text-5xl'>
         <span className={`block`}>{textPrimary}</span>
         <span className={`text-[#f4af00]`}>{textSecondary}</span>
      </h1>
   );
};

TitleCustom.propTypes = {
   textPrimary: PropTypes.string.isRequired,
   textSecondary: PropTypes.string.isRequired,
};
