import React from 'react';

interface ReasonForSparingProps {
  reasonForSparing: string;
  onchangeReasonSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  validate: (value: string) => string[]; // Add this line for the validate prop
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onchangeReasonSparing, validate }: ReasonForSparingProps) => {
  const errorMessages = validate(reasonForSparing);

  return (
    <div>
      <label htmlFor="reasonforSparing">Reason for sparing</label>
      <textarea
        id="reasonforSparing"
        value={reasonForSparing}
        onChange={(e) => onchangeReasonSparing(e)}
        className={errorMessages.length > 0 ? 'input-error' : ''}
      />
      {errorMessages.length > 0 && (
        <div className="error-messages">
          {errorMessages.map((error, index) => (
            <div key={index} className="error-message">
              {error}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReasonForSparing;
