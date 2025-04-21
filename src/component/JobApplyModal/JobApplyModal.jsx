import React, { useState } from "react";
import styles from "./JobApplyModal.module.css";
import { RxCross2 } from "react-icons/rx";
import { FaUpload } from "react-icons/fa";

export default function JobApplyModal({ job, onClose }) {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file ? file.name : null);
  };
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <h3>Apply for {job.title}</h3>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.eachInput}>
                <input
                  className={styles.eachInputItem}
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.eachInput}>
                <input
                  className={styles.eachInputItem}
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.eachInput}>
                <input
                  className={styles.eachInputItem}
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.eachInput}>
                <input
                  className={styles.eachInputItem}
                  type="text"
                  placeholder="Experience (e.g. 3 years)"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.eachInput}>
                <input
                  className={styles.eachInputItem}
                  type="text"
                  placeholder="Current Employer"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.eachInput}>
                <input
                  className={styles.eachInputItem}
                  type="text"
                  placeholder="Current CTC"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.eachInput}>
                <input
                  className={styles.eachInputItem}
                  type="text"
                  placeholder="Expected CTC"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.eachInput}>
                <input
                  className={styles.eachInputItem}
                  type="text"
                  placeholder="Notice Period"
                />
              </div>
            </div>
            <div className="col-12">
              <div className={styles.eachInput}>
                <label className={styles.fileUploadLabel}>
                  {selectedFile ? (
                    ""
                  ) : (
                    <FaUpload className={styles.uploadIcon} />
                  )}
                  {selectedFile ? selectedFile : "Upload Your CV"}
                  <input
                    className={styles.fileInput}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className={styles.cmnBtn}>
            Submit Application
          </button>
        </form>
        <button className={styles.closeBtn} onClick={onClose}>
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}
