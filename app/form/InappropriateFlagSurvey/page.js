// components/InappropriateFlagSurvey.js

import React, { useState } from 'react';

const InappropriateFlagSurvey = ({close}) => {
  const [reason, setReason] = useState('');

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    close()
    // TODO: Implement logic to handle the submission of the survey data;
  };

  return (
    <form className="max-w-full p-8 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Flag Content as Inappropriate</h2>

      <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
        Why do you find this content inappropriate?
      </label>
      <textarea
        id="reason"
        name="reason"
        rows="4"
        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
        value={reason}
        onChange={handleReasonChange}
        required
      ></textarea>

      <div className="mt-6">
        <button
          disabled={reason.trim() === ''}
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default InappropriateFlagSurvey;
