export const base = "http://localhost:5000/api";

//customer
export const getAllCustomer = `${base}/customer`;
export const getCustBomList = `${base}/custBomList`;

export const getPartListByCreated = `${base}/materialReceiptRegister?type1=Created&type2=Parts`;
export const getPartListByReceived = `${base}/materialReceiptRegister?type1=Received&type2=Parts`;
export const getPartListByClosed = `${base}/materialReceiptRegister?type1=Closed&type2=Parts`;

export const getUnitListByCreated = `${base}/materialReceiptRegister?type1=Created&type2=Units`;
export const getUnitListByReceived = `${base}/materialReceiptRegister?type1=Received&type2=Units`;
export const getUnitListByClosed = `${base}/materialReceiptRegister?type1=Closed&type2=Units`;

export const getSheetListByCreated = `${base}/materialReceiptRegister?type1=Created&type2=Sheets`;
export const getSheetListByReceived = `${base}/materialReceiptRegister?type1=Received&type2=Sheets`;
export const getSheetListByClosed = `${base}/materialReceiptRegister?type1=Closed&type2=Sheets`;

export const materialHeaderReceiptRegister = `${base}/materialReceiptRegister/insertHeader`;
