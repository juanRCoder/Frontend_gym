import PropTypes from 'prop-types';

export const TitleCustom = ({ textPrimary, textSecondary }) => {
   return (
      <h1 className='w-fit mx-auto text-center uppercase font-medium text-3xl md:text-5xl md:leading-[3.5rem]'>
         <span className={`block`}>{textPrimary}</span>
         <span className={`text-colorYellow`}>{textSecondary}</span>
      </h1>
   );
};

TitleCustom.propTypes = {
   textPrimary: PropTypes.string.isRequired,
   textSecondary: PropTypes.string.isRequired,
};
