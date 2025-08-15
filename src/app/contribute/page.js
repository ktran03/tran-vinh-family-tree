"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContributePage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        contributorName: "",
        contributorEmail: "",
        contributorRelation: "",
        contributionType: "",
        familyMemberName: "",
        description: "",
        additionalInfo: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Create email body
        const emailBody = `
Family Tree Contribution Request

CONTRIBUTOR INFORMATION:
Name: ${formData.contributorName}
Email: ${formData.contributorEmail}
Relation to Family: ${formData.contributorRelation}

CONTRIBUTION DETAILS:
Type: ${formData.contributionType}
${formData.familyMemberName ? `Family Member: ${formData.familyMemberName}` : ''}
Description: ${formData.description}
${formData.additionalInfo ? `Additional Information: ${formData.additionalInfo}` : ''}

Please review and contact the contributor if you need more information.
        `.trim();

        // Create mailto link (you can replace this with actual email service later)
        const mailtoLink = `mailto:your-email@example.com?subject=Family Tree Contribution Request - ${formData.contributionType}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        setSubmitMessage(t('thankYou'));
        setIsSubmitting(false);
        
        // Reset form
        setFormData({
            contributorName: "",
            contributorEmail: "",
            contributorRelation: "",
            contributionType: "",
            familyMemberName: "",
            description: "",
            additionalInfo: ""
        });
    };

    return (
        <>
            <Header />
            <div className="page-container">
                <div style={{
                    background: "var(--ivory)",
                    padding: "40px",
                    borderRadius: "12px",
                    margin: "40px auto",
                    maxWidth: "800px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    border: "1px solid var(--golden-yellow)",
                    borderTop: "4px solid var(--imperial-red)"
                }}>
                    <h1 style={{
                        textAlign: "center",
                        color: "var(--imperial-red)",
                        fontFamily: "Crimson Text, serif",
                        fontSize: "32px",
                        fontWeight: "600",
                        marginBottom: "20px",
                        paddingBottom: "15px",
                        borderBottom: "2px solid var(--golden-yellow)"
                    }}>
{t('contributeTitle')}
                    </h1>

                    <div style={{
                        background: "var(--pearl-white)",
                        padding: "25px",
                        borderRadius: "8px",
                        border: "1px solid var(--golden-yellow)",
                        borderLeft: "4px solid var(--jade-green)",
                        marginBottom: "30px"
                    }}>
                        <p style={{
                            color: "var(--charcoal)",
                            fontFamily: "Noto Serif, serif",
                            fontSize: "16px",
                            lineHeight: "1.6",
                            margin: "0 0 15px 0"
                        }}>
{t('contributeDescription')}
                        </p>
                    </div>

                    {submitMessage && (
                        <div style={{
                            background: "var(--jade-green)",
                            color: "white",
                            padding: "15px",
                            borderRadius: "8px",
                            marginBottom: "25px",
                            textAlign: "center"
                        }}>
                            {submitMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {/* Contributor Information */}
                        <div style={{
                            background: "var(--pearl-white)",
                            padding: "20px",
                            borderRadius: "8px",
                            border: "1px solid var(--golden-yellow)"
                        }}>
                            <h3 style={{
                                color: "var(--imperial-red)",
                                fontFamily: "Crimson Text, serif",
                                fontSize: "20px",
                                marginBottom: "15px"
                            }}>
                                {t('contributorInfo')}
                            </h3>
                            
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginBottom: "15px" }}>
                                <div>
                                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "var(--charcoal)" }}>
                                        {t('yourName')} {t('required')}
                                    </label>
                                    <input
                                        type="text"
                                        name="contributorName"
                                        value={formData.contributorName}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            border: "2px solid var(--golden-yellow)",
                                            borderRadius: "4px",
                                            fontSize: "14px"
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "var(--charcoal)" }}>
                                        {t('email')} {t('required')}
                                    </label>
                                    <input
                                        type="email"
                                        name="contributorEmail"
                                        value={formData.contributorEmail}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            border: "2px solid var(--golden-yellow)",
                                            borderRadius: "4px",
                                            fontSize: "14px"
                                        }}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "var(--charcoal)" }}>
                                    {t('relationToFamily')} {t('required')}
                                </label>
                                <input
                                    type="text"
                                    name="contributorRelation"
                                    value={formData.contributorRelation}
                                    onChange={handleChange}
                                    placeholder={t('relationPlaceholder')}
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        border: "2px solid var(--golden-yellow)",
                                        borderRadius: "4px",
                                        fontSize: "14px"
                                    }}
                                />
                            </div>
                        </div>

                        {/* Contribution Details */}
                        <div style={{
                            background: "var(--pearl-white)",
                            padding: "20px",
                            borderRadius: "8px",
                            border: "1px solid var(--golden-yellow)"
                        }}>
                            <h3 style={{
                                color: "var(--imperial-red)",
                                fontFamily: "Crimson Text, serif",
                                fontSize: "20px",
                                marginBottom: "15px"
                            }}>
                                {t('contributionDetails')}
                            </h3>
                            
                            <div style={{ marginBottom: "15px" }}>
                                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "var(--charcoal)" }}>
                                    {t('contributionType')} {t('required')}
                                </label>
                                <select
                                    name="contributionType"
                                    value={formData.contributionType}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        border: "2px solid var(--golden-yellow)",
                                        borderRadius: "4px",
                                        fontSize: "14px"
                                    }}
                                >
                                    <option value="">{t('selectType')}</option>
                                    <option value="Add New Family Member">{t('contributionTypes.newMember')}</option>
                                    <option value="Add Child/Spouse">{t('contributionTypes.childSpouse')}</option>
                                    <option value="Photo Contribution">{t('contributionTypes.photos')}</option>
                                    <option value="Biography/Story">{t('contributionTypes.biography')}</option>
                                    <option value="Correct Information">{t('contributionTypes.correction')}</option>
                                    <option value="Historical Document">{t('contributionTypes.document')}</option>
                                    <option value="Other">{t('contributionTypes.other')}</option>
                                </select>
                            </div>

                            <div style={{ marginBottom: "15px" }}>
                                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "var(--charcoal)" }}>
                                    {t('familyMemberName')}
                                </label>
                                <input
                                    type="text"
                                    name="familyMemberName"
                                    value={formData.familyMemberName}
                                    onChange={handleChange}
                                    placeholder={t('familyMemberPlaceholder')}
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        border: "2px solid var(--golden-yellow)",
                                        borderRadius: "4px",
                                        fontSize: "14px"
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: "15px" }}>
                                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "var(--charcoal)" }}>
                                    {t('detailedDescription')} {t('required')}
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder={t('descriptionPlaceholder')}
                                    required
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        border: "2px solid var(--golden-yellow)",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        resize: "vertical"
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: "block", marginBottom: "5px", fontWeight: "500", color: "var(--charcoal)" }}>
                                    {t('additionalInfo')}
                                </label>
                                <textarea
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder={t('additionalPlaceholder')}
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        border: "2px solid var(--golden-yellow)",
                                        borderRadius: "4px",
                                        fontSize: "14px",
                                        resize: "vertical"
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{
                            background: "var(--soft-beige)",
                            padding: "15px",
                            borderRadius: "8px",
                            border: "1px solid var(--warm-gray)",
                            fontSize: "14px",
                            color: "var(--charcoal)"
                        }}>
                            {t('submitNote')}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                background: `linear-gradient(90deg, var(--imperial-red), var(--golden-yellow))`,
                                color: "white",
                                padding: "15px 30px",
                                border: "none",
                                borderRadius: "8px",
                                fontSize: "18px",
                                fontWeight: "600",
                                cursor: isSubmitting ? "not-allowed" : "pointer",
                                transition: "all 0.3s ease",
                                fontFamily: "Crimson Text, serif"
                            }}
                        >
                            {isSubmitting ? t('submitting') : t('submitButton')}
                        </button>
                    </form>

                </div>
            </div>
        </>
    );
}