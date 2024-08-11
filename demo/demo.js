import {basicSetup, EditorView} from "codemirror"
import {lineNumbers} from "@codemirror/view"
import {gitConflicts} from "../dist/index.js"
import {xml} from "@codemirror/lang-xml"

window.view = new EditorView({
  doc: `<?xml version="1.0" encoding="utf-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
  <actionOverrides>
    <actionName>Accept</actionName>
    <type>Default</type>
  </actionOverrides>
  <parent>
	<actionOverrides>
		<actionName>Accept</actionName>
		<formFactor>Large</formFactor>
		<type>Default</type>
	</actionOverrides>
<<<<<<< HEAD
	<actionOverrides>
		<actionName>Reject</actionName>
		<formFactor>Large</formFactor>
		<type>Basic</type>
	</actionOverrides>
||||||| 2c5a01026f3c364bc758809893d29f166aa5ae77
	<actionOverrides>
		<actionName>Accept</actionName>
		<formFactor>Small</formFactor>
		<type>Default</type>
	</actionOverrides>
=======
	<actionOverrides>
		<actionName>Accept</actionName>
		<formFactor>Large</formFactor>
		<type>Advanced</type>
	</actionOverrides>
>>>>>>> dev
	<actionOverrides>
		<actionName>CancelEdit</actionName>
		<type>Default</type>
	</actionOverrides>
	<actionOverrides>
		<actionName>What we have here is a really long line to force the conflict widget above to become wider than it's supposed to be. It's meant to be limited to the viewport width, not the full document width.</actionName>
		<formFactor>Large</formFactor>
		<type>Default</type>
	</actionOverrides>
  </parent>
  <actionOverrides>
    <actionName>CancelEdit</actionName>
    <formFactor>Small</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Clone</actionName>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Clone</actionName>
    <formFactor>Large</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Clone</actionName>
    <formFactor>Small</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Delete</actionName>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Delete</actionName>
    <formFactor>Large</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Delete</actionName>
    <formFactor>Small</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Edit</actionName>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Edit</actionName>
    <formFactor>Large</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Edit</actionName>
    <formFactor>Small</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>List</actionName>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>List</actionName>
    <formFactor>Large</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>List</actionName>
    <formFactor>Small</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>New</actionName>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>New</actionName>
    <formFactor>Large</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>New</actionName>
    <formFactor>Small</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>SaveEdit</actionName>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>SaveEdit</actionName>
    <formFactor>Large</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>SaveEdit</actionName>
    <formFactor>Small</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Tab</actionName>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Tab</actionName>
    <formFactor>Large</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>Tab</actionName>
    <formFactor>Small</formFactor>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>View</actionName>
    <type>Default</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>View</actionName>
    <comment>Action override created by Lightning App Builder during activation.</comment>
    <content>Lightning_Account_Create_Change_Request</content>
    <formFactor>Large</formFactor>
    <skipRecordTypeSelect>false</skipRecordTypeSelect>
    <type>Flexipage</type>
  </actionOverrides>
  <actionOverrides>
    <actionName>View</actionName>
    <comment>Action override created by Lightning App Builder during activation.</comment>
    <content>Lightning_Account_Create_Change_Request</content>
    <formFactor>Small</formFactor>
    <skipRecordTypeSelect>false</skipRecordTypeSelect>
    <type>Flexipage</type>
  </actionOverrides>
  <allowInChatterGroups>true</allowInChatterGroups>
  <compactLayoutAssignment>Lightning_Account_Create_Change_Request</compactLayoutAssignment>
  <compactLayouts>
    <fullName>Lightning_Account_Create_Change_Request</fullName>
    <fields>Name</fields>
    <fields>Request__c</fields>
    <fields>Request_Type__c</fields>
    <fields>Pending_Order__c</fields>
    <fields>OwnerId</fields>
    <fields>CreatedById</fields>
    <fields>CreatorTeam__c</fields>
    <label>Lightning Account Create/Change Request</label>
  </compactLayouts>
  <deploymentStatus>Deployed</deploymentStatus>
  <enableActivities>true</enableActivities>
  <enableBulkApi>true</enableBulkApi>
  <enableFeeds>true</enableFeeds>
  <enableHistory>true</enableHistory>
  <enableLicensing>false</enableLicensing>
  <enableReports>true</enableReports>
  <enableSearch>true</enableSearch>
  <enableSharing>true</enableSharing>
  <enableStreamingApi>true</enableStreamingApi>
  <externalSharingModel>Private</externalSharingModel>
  <fields>
    <fullName>Account_Fax__c</fullName>
    <label>Account Fax</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Phone</type>
  </fields>
  <fields>
    <fullName>Account_Name__c</fullName>
    <externalId>false</externalId>
    <inlineHelpText>Be sure to fill this in if this is a new Account!</inlineHelpText>
    <label>Account Name (Practice Name)</label>
    <length>76</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Account_Name_only_if_New__c</fullName>
    <externalId>false</externalId>
    <label>Account Name (only if New)</label>
    <length>76</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Account_OneSF_ID__c</fullName>
    <externalId>false</externalId>
    <formula>Existing_Account__r.OneSF_Id__c</formula>
    <label>Account OneSF ID</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Account_Phone_Number__c</fullName>
    <label>Account Phone Number</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Phone</type>
  </fields>
  <fields>
    <fullName>Account_Record_Type_if_Existing__c</fullName>
    <externalId>false</externalId>
    <formula>CASE( Existing_Account__r.RecordTypeId ,"01220000000DiSB", "Clinical Customer","01220000000DiSf", "Clinical Prospect","0120J000000cmd3", "DNA Distributor","0120J000000cmcy", "DNA End User","0120J000000cmd8", "DNA Internal","OTHER")</formula>
    <formulaTreatBlanksAs>BlankAsZero</formulaTreatBlanksAs>
    <label>Account Record Type if Existing</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Account_Type__c</fullName>
    <label>Account Type</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <controllingField>User_Country__c</controllingField>
      <restricted>true</restricted>
      <valueSetName>Account_Type</valueSetName>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Competitor</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Thailand</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Dental Clinic</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Thailand</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Dental Laboratory</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Dental Support Organization</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Thailand</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Distributor</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Thailand</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Education</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>General Practice</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Government</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <valueName>Insurance Care Center</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Internal</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Lab within a Clinic</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Thailand</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Medical</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>Singapore</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Non-Dental</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Jordan</controllingFieldValue>
        <controllingFieldValue>Vietnam</controllingFieldValue>
        <controllingFieldValue>New Zealand</controllingFieldValue>
        <controllingFieldValue>Norway</controllingFieldValue>
        <controllingFieldValue>Lebanon</controllingFieldValue>
        <controllingFieldValue>Poland</controllingFieldValue>
        <controllingFieldValue>Kazakhstan</controllingFieldValue>
        <controllingFieldValue>Portugal</controllingFieldValue>
        <controllingFieldValue>Cameroun</controllingFieldValue>
        <controllingFieldValue>Qatar</controllingFieldValue>
        <controllingFieldValue>Senegal</controllingFieldValue>
        <controllingFieldValue>Iran</controllingFieldValue>
        <controllingFieldValue>Russia</controllingFieldValue>
        <controllingFieldValue>Iraq</controllingFieldValue>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>Saudi Arabia</controllingFieldValue>
        <controllingFieldValue>Libya</controllingFieldValue>
        <controllingFieldValue>Yemen</controllingFieldValue>
        <controllingFieldValue>South Africa</controllingFieldValue>
        <controllingFieldValue>Spain</controllingFieldValue>
        <controllingFieldValue>Denmark</controllingFieldValue>
        <controllingFieldValue>Estonia</controllingFieldValue>
        <controllingFieldValue>Finland</controllingFieldValue>
        <controllingFieldValue>France</controllingFieldValue>
        <controllingFieldValue>Australia</controllingFieldValue>
        <controllingFieldValue>Austria</controllingFieldValue>
        <controllingFieldValue>Bahrain</controllingFieldValue>
        <controllingFieldValue>Belgium</controllingFieldValue>
        <controllingFieldValue>Brazil</controllingFieldValue>
        <controllingFieldValue>Sweden</controllingFieldValue>
        <controllingFieldValue>Switzerland</controllingFieldValue>
        <controllingFieldValue>Taiwan</controllingFieldValue>
        <controllingFieldValue>Thailand</controllingFieldValue>
        <controllingFieldValue>Germany</controllingFieldValue>
        <controllingFieldValue>Tunisia</controllingFieldValue>
        <controllingFieldValue>Turkey</controllingFieldValue>
        <controllingFieldValue>Greece</controllingFieldValue>
        <controllingFieldValue>UAE</controllingFieldValue>
        <controllingFieldValue>Ukraine</controllingFieldValue>
        <controllingFieldValue>Hong Kong</controllingFieldValue>
        <controllingFieldValue>India</controllingFieldValue>
        <controllingFieldValue>Indonesia</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <controllingFieldValue>UK</controllingFieldValue>
        <controllingFieldValue>Holland</controllingFieldValue>
        <controllingFieldValue>Israel</controllingFieldValue>
        <controllingFieldValue>Italy</controllingFieldValue>
        <controllingFieldValue>Algeria</controllingFieldValue>
        <controllingFieldValue>Morocco</controllingFieldValue>
        <controllingFieldValue>Kuwait</controllingFieldValue>
        <controllingFieldValue>Latvia</controllingFieldValue>
        <controllingFieldValue>Lithuania</controllingFieldValue>
        <controllingFieldValue>Mauritius</controllingFieldValue>
        <controllingFieldValue>Maldives</controllingFieldValue>
        <controllingFieldValue>Pakistan</controllingFieldValue>
        <controllingFieldValue>Armenia</controllingFieldValue>
        <controllingFieldValue>Azerbaijan</controllingFieldValue>
        <controllingFieldValue>Georgia</controllingFieldValue>
        <controllingFieldValue>Ivory Coast</controllingFieldValue>
        <controllingFieldValue>Belarus</controllingFieldValue>
        <controllingFieldValue>Luxembourg</controllingFieldValue>
        <controllingFieldValue>South Korea</controllingFieldValue>
        <controllingFieldValue>Egypt</controllingFieldValue>
        <controllingFieldValue>Oman</controllingFieldValue>
        <valueName>Patient</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>Specialty</valueName>
      </valueSettings>
    </valueSet>
  </fields>
  <fields>
    <fullName>AccountCountry__c</fullName>
    <label>Country Code</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <controllingField>Request__c</controllingField>
      <restricted>true</restricted>
      <valueSetName>Country_Code_2_digit</valueSetName>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>AD</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>AE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>AL</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>AM</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>AT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>AU</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>AZ</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>BA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>BE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>BG</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>BH</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>BR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>BY</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>CH</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>CI</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>CM</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>CY</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>CZ</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>DE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>DK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>DZ</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>EE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>EG</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>ES</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>FI</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>FR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>GB</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>GE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>GR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>HK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>HR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>HU</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>ID</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>IE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>IL</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>IN</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>IQ</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>IR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>IT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>JO</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>KR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>KW</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>KZ</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>LB</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>LT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>LU</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>LV</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>LY</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>MA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>MC</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>ME</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>MK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>MT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>MU</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>MV</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>NL</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>NO</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>NZ</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>OM</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>PK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>PL</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>PS</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>PT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>QA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>RO</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>RS</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>RU</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>SA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>SE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>SG</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>SI</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>SK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>SM</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>SN</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>TH</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>TN</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>TR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>TW</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>UA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>VA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>VN</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>XK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>YE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>ZA</valueName>
      </valueSettings>
    </valueSet>
  </fields>
  <fields>
    <fullName>Approval_Status__c</fullName>
    <externalId>false</externalId>
    <formula>CASE( Status__c , "Created", IMAGE("/resource/1444678382000/NACAMPSTATUSSUBMIT",
 "Not Submitted",120,215), 
"Submitted",IMAGE("/resource/1444678335000/NACAMPSTATUSPENDING", "Submitted",90,170), 
"Processing",IMAGE("/resource/1444678335000/NACAMPSTATUSPENDING", "Submitted",90,170), 
"Completed",IMAGE("/resource/1444678363000/NACAMPSTATUSAPPROVED", "Completed",70,70),
"Rejected", Image("/resource/1444678681000/NACAMPREJECTED", "Rejected", 50,120),"UNKNOWN")</formula>
    <formulaTreatBlanksAs>BlankAsZero</formulaTreatBlanksAs>
    <label>Approval Status</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Bank__c</fullName>
    <externalId>false</externalId>
    <label>Bank</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>BillingAccountName__c</fullName>
    <externalId>false</externalId>
    <label>Billing Account Name</label>
    <length>80</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>BillingCity__c</fullName>
    <externalId>false</externalId>
    <label>Billing City</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>BillingCountry__c</fullName>
    <externalId>false</externalId>
    <label>Billing Country</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>BillingPostalCode__c</fullName>
    <externalId>false</externalId>
    <label>Billing Zip/Postal Code</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>BillingStateProvince__c</fullName>
    <externalId>false</externalId>
    <label>Billing State/Province</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>BillingStreet__c</fullName>
    <externalId>false</externalId>
    <label>Billing Street</label>
    <length>200</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>CertifiedEmail__c</fullName>
    <externalId>false</externalId>
    <label>Certified Email</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Email</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Changed_Account_Name__c</fullName>
    <formula>If( or(ISBLANK( Existing_Account__c ),ISBLANK(Account_Name__c )),false,if( Account_Name__c &lt;&gt;  Old_Account_Name__c ,True,False))</formula>
    <label>Changed Account Name</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Changed_Account_Type__c</fullName>
    <formula>If( or(ISBLANK( Existing_Account__c ),ISBLANK(text(Account_Type__c))),false, if(text(Account_Type__c) &lt;&gt; text(Existing_Account__r.OneAccount_Type__c),True,False))</formula>
    <label>Changed Account Type</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Changed_Address__c</fullName>
    <formula>if( or(ISBLANK( Existing_Account__c ),CompleteVisitingAddress__c==", , , , ") ,False,
IF( or(
Country__c &lt;&gt; Old_BillingCountry__c ,
Postal_Zip_Code__c&lt;&gt; Old_BillingPostalCode__c ,
City__c&lt;&gt; Old_BillingCity__c ,
StreetAddress__c &lt;&gt; Old_BillingStreet__c ,
State_Province__c &lt;&gt; Old_BillingState__c ),
True,False))</formula>
    <label>Changed Address</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Changed_Parent_Account__c</fullName>
    <formula>if(or( ISBLANK( Existing_Account__c ),isblank( Parent_Account__c )),False, if( Parent_Account__r.Id &lt;&gt;  Existing_Account__r.Parent.Id  , True,False))</formula>
    <label>Changed Parent Account</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Changed_Phone__c</fullName>
    <formula>If( or(ISBLANK( Existing_Account__c ),
ISBLANK( Account_Phone_Number__c  )),false,
if(  Account_Phone_Number__c &lt;&gt;  Old_Phone__c  ,True,False))</formula>
    <label>Changed Phone</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Changed_Specialty__c</fullName>
    <formula>If(
OR(ISBLANK( Existing_Account__c ),ISBLANK(text(Specialty__c))), false, 
if(text(Specialty__c) &lt;&gt; Old_Specialty__c ,True,False)
)</formula>
    <label>Changed Specialty</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>ChangedOrganisationNumber__c</fullName>
    <formula>if( or(ISBLANK( Existing_Account__c ),
ISBLANK(  OrganisationNumber__c  )),false,
if( OrganisationNumber__c &lt;&gt;  Old_OrganisationNumber__c  ,True,False))</formula>
    <label>Changed Organisation Number</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>CimId__c</fullName>
    <externalId>false</externalId>
    <formula>TEXT(Existing_Account__r.CIM360Id__c)</formula>
    <label>Cim Id</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>City__c</fullName>
    <externalId>false</externalId>
    <label>City</label>
    <length>200</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Comments__c</fullName>
    <label>Comments</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>TextArea</type>
  </fields>
  <fields>
    <fullName>CompleteVisitingAddress__c</fullName>
    <externalId>false</externalId>
    <formula>StreetAddress__c &amp; ", " &amp; City__c &amp; ", " &amp;  State_Province__c &amp; ", " &amp; Postal_Zip_Code__c &amp; ", " &amp; Country__c</formula>
    <label>Complete Address</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Country__c</fullName>
    <description>To set the Country of the Account Requested</description>
    <externalId>false</externalId>
    <label>Country</label>
    <length>50</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Created_by_me__c</fullName>
    <formula>IF(CreatedById == $User.Id, TRUE, FALSE)</formula>
    <label>Created by me</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Created_by_My_Direct_Reports__c</fullName>
    <formula>IF(CreatedBy.ManagerId = $User.Id, True, false)</formula>
    <label>Created by My Direct Reports</label>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Created_by_SBU__c</fullName>
    <externalId>false</externalId>
    <formula>CreatedBy.User_SBU__c</formula>
    <formulaTreatBlanksAs>BlankAsZero</formulaTreatBlanksAs>
    <label>Created by SBU</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Created_By_TERR_ID__c</fullName>
    <externalId>false</externalId>
    <formula>CreatedBy.Movex_Uer_ID__c</formula>
    <formulaTreatBlanksAs>BlankAsZero</formulaTreatBlanksAs>
    <label>Created By TERR ID</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Creator_Country__c</fullName>
    <externalId>false</externalId>
    <formula>text(CreatedBy.User_Country__c)</formula>
    <formulaTreatBlanksAs>BlankAsZero</formulaTreatBlanksAs>
    <label>Creator Country</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>CreatorTeam__c</fullName>
    <externalId>false</externalId>
    <formula>TEXT(CreatedBy.Team__c)</formula>
    <label>Creator Team</label>
    <required>false</required>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>CurrencyISOCode__c</fullName>
    <description>New currency code that the account should have</description>
    <label>Account Currency</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <restricted>true</restricted>
      <valueSetName>Currency_ISO_Codes</valueSetName>
    </valueSet>
  </fields>
  <fields>
    <fullName>Customer_Sub_Segment__c</fullName>
    <externalId>false</externalId>
    <label>Customer Sub-Segment</label>
    <length>50</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>DestinationCode__c</fullName>
    <description>unique Account Verification Code - registered on the Taxes agency (by the supplier)
to be specified in the invoice</description>
    <externalId>false</externalId>
    <label>Destination Code</label>
    <length>7</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Email__c</fullName>
    <externalId>false</externalId>
    <label>Email</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Email</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Existing_Account__c</fullName>
    <deleteConstraint>SetNull</deleteConstraint>
    <label>Existing Account</label>
    <referenceTo>Account</referenceTo>
    <relationshipName>Account_Create_Change_Requests</relationshipName>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Lookup</type>
  </fields>
  <fields>
    <fullName>First_Name__c</fullName>
    <externalId>false</externalId>
    <label>First Name</label>
    <length>40</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>IBAN__c</fullName>
    <externalId>false</externalId>
    <label>IBAN</label>
    <length>100</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Identity_Management_Notes_on_Account__c</fullName>
    <label>Identity Management Notes on Account</label>
    <length>32768</length>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>LongTextArea</type>
    <visibleLines>5</visibleLines>
  </fields>
  <fields>
    <fullName>isPORequired__c</fullName>
    <defaultValue>false</defaultValue>
    <label>PO required on orders</label>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Last_Name__c</fullName>
    <externalId>false</externalId>
    <label>Last Name</label>
    <length>80</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Lead__c</fullName>
    <deleteConstraint>SetNull</deleteConstraint>
    <label>Lead</label>
    <referenceTo>Lead</referenceTo>
    <relationshipLabel>Account Requests</relationshipLabel>
    <relationshipName>Account_Requests</relationshipName>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Lookup</type>
  </fields>
  <fields>
    <fullName>Main_DS_Contact__c</fullName>
    <deleteConstraint>SetNull</deleteConstraint>
    <description>TFUS-000006623
Used to set who is main responsible for the customer from DentsplySirona</description>
    <label>Main DS Contact (Sales Rep)</label>
    <referenceTo>User</referenceTo>
    <relationshipName>Account_Requests</relationshipName>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Lookup</type>
  </fields>
  <fields>
    <fullName>MethodofPayement__c</fullName>
    <externalId>false</externalId>
    <label>Method of Payment</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ofProfessionals__c</fullName>
    <externalId>false</externalId>
    <label># of Professionals</label>
    <precision>18</precision>
    <required>false</required>
    <scale>0</scale>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Number</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ofUnits__c</fullName>
    <externalId>false</externalId>
    <label># of Units</label>
    <precision>18</precision>
    <required>false</required>
    <scale>0</scale>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Number</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_Account_Name__c</fullName>
    <description>Original Account Name during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old Account Name</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_Account_Type__c</fullName>
    <externalId>false</externalId>
    <label>Old Account Type</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_AccountCountry__c</fullName>
    <externalId>false</externalId>
    <label>Old Account Country</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_BillingCity__c</fullName>
    <description>Original City during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old City</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_BillingCountry__c</fullName>
    <description>Original Country during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old Country</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_BillingPostalCode__c</fullName>
    <description>Original Postal Code during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old Zip/Postal Code</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_BillingState__c</fullName>
    <description>Original State during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old State/Province</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_BillingStreet__c</fullName>
    <description>Original Street during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old Street</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_CurrencyIsoCode__c</fullName>
    <description>Original CurrencyIsoCode during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old CurrencyIsoCode</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_OrganisationNumber__c</fullName>
    <externalId>false</externalId>
    <label>Old Organisation Number</label>
    <length>32</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_ParentAccount__c</fullName>
    <deleteConstraint>SetNull</deleteConstraint>
    <label>Old Parent Account</label>
    <referenceTo>Account</referenceTo>
    <relationshipLabel>Account Requests (Old Parent Account)</relationshipLabel>
    <relationshipName>Account_RequestsParentAcc</relationshipName>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Lookup</type>
  </fields>
  <fields>
    <fullName>Old_Phone__c</fullName>
    <description>Original Phone during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old Phone</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_Postal_Code_Info__c</fullName>
    <description>Original Postal Code Info during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>Old Postal Code Info</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_ShippingCity__c</fullName>
    <description>Original ShippingCity during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>TODEL_Old City</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_ShippingCountry__c</fullName>
    <description>Original ShippingCountry during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>TODEL_Old Country</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_ShippingPostalCode__c</fullName>
    <description>Original ShippingPostalCode during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>TODEL_Old Zip/Postal Code</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_ShippingState__c</fullName>
    <description>Original ShippingState during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>TODEL_Old State/Province</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_ShippingStreet__c</fullName>
    <description>Original ShippingStreet during creation of the Change Request. [ACR 2.0]</description>
    <externalId>false</externalId>
    <label>TODEL_Old Street</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Old_Specialty__c</fullName>
    <externalId>false</externalId>
    <label>Old Specialty</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>OrganisationNumber__c</fullName>
    <externalId>false</externalId>
    <label>Organisation Number</label>
    <length>32</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>OrganisationNumber2__c</fullName>
    <externalId>false</externalId>
    <label>Organisation Number (#2)</label>
    <length>100</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Parent_Account__c</fullName>
    <deleteConstraint>SetNull</deleteConstraint>
    <label>Parent Account</label>
    <referenceTo>Account</referenceTo>
    <relationshipLabel>Account Requests (Parent Account)</relationshipLabel>
    <relationshipName>Account_Requests</relationshipName>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Lookup</type>
  </fields>
  <fields>
    <fullName>PaymentTypes__c</fullName>
    <label>Payment Types</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <valueSetDefinition>
        <sorted>false</sorted>
        <value>
          <fullName>BANK RECEIPT</fullName>
          <default>false</default>
          <label>BANK RECEIPT</label>
        </value>
        <value>
          <fullName>TRANSFER</fullName>
          <default>false</default>
          <label>TRANSFER</label>
        </value>
        <value>
          <fullName>DIRECT REMITTANCE</fullName>
          <default>false</default>
          <label>DIRECT REMITTANCE</label>
        </value>
      </valueSetDefinition>
    </valueSet>
  </fields>
  <fields>
    <fullName>Pending_Order__c</fullName>
    <defaultValue>false</defaultValue>
    <label>Pending Order</label>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>PlaceofResidency__c</fullName>
    <externalId>false</externalId>
    <label>Place of Residency (If Resident)</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Postal_Zip_Code__c</fullName>
    <externalId>false</externalId>
    <label>Zip/Postal Code</label>
    <length>10</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Practitioner_ID_NPI_in_US__c</fullName>
    <externalId>false</externalId>
    <label>Practitioner ID (NPI in US)</label>
    <length>50</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ReceiveaCourtesyCopybyEmail__c</fullName>
    <defaultValue>false</defaultValue>
    <label>Receive a Courtesy Copy by Email ?</label>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>ReceivetheOrderSummary__c</fullName>
    <defaultValue>false</defaultValue>
    <label>Receive the Order Summary ?</label>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>ReceiveTrackingOrdersbyEmail__c</fullName>
    <defaultValue>false</defaultValue>
    <label>Receive Tracking Orders by Email ?</label>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>Request__c</fullName>
    <label>Request</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <restricted>true</restricted>
      <valueSetDefinition>
        <sorted>false</sorted>
        <value>
          <fullName>Account Change Request</fullName>
          <default>false</default>
          <label>Account Change Request</label>
        </value>
        <value>
          <fullName>Account Creation Request</fullName>
          <default>true</default>
          <label>Account Creation Request</label>
        </value>
      </valueSetDefinition>
    </valueSet>
  </fields>
  <fields>
    <fullName>Request_Type__c</fullName>
    <label>Request Type</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <controllingField>Request__c</controllingField>
      <restricted>true</restricted>
      <valueSetDefinition>
        <sorted>false</sorted>
        <value>
          <fullName>Account Info Change</fullName>
          <default>false</default>
          <label>Account Info Change</label>
        </value>
        <value>
          <fullName>Account Linking CIM360</fullName>
          <default>false</default>
          <label>Account Linking CIM360</label>
        </value>
        <value>
          <fullName>All Stop</fullName>
          <default>false</default>
          <label>All Stop</label>
        </value>
        <value>
          <fullName>Create New Account</fullName>
          <default>true</default>
          <label>Create New Account</label>
        </value>
        <value>
          <fullName>Create New ERP Account</fullName>
          <default>false</default>
          <label>Create New ERP Account</label>
        </value>
        <value>
          <fullName>Parent/Child Grouping</fullName>
          <default>false</default>
          <label>Parent/Child Grouping</label>
        </value>
        <value>
          <fullName>Pending Order</fullName>
          <default>false</default>
          <label>Pending Order</label>
        </value>
        <value>
          <fullName>Reopen Account</fullName>
          <default>false</default>
          <label>Reopen Account</label>
        </value>
        <value>
          <fullName>Sales Issue</fullName>
          <default>false</default>
          <label>Sales Issue</label>
        </value>
        <value>
          <fullName>Account Linking</fullName>
          <default>false</default>
          <isActive>false</isActive>
          <label>Account Linking</label>
        </value>
      </valueSetDefinition>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <valueName>Account Info Change</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <valueName>Account Linking CIM360</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <valueName>All Stop</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>Create New Account</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Creation Request</controllingFieldValue>
        <valueName>Create New ERP Account</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <valueName>Parent/Child Grouping</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <valueName>Pending Order</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <valueName>Reopen Account</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Account Change Request</controllingFieldValue>
        <valueName>Sales Issue</valueName>
      </valueSettings>
    </valueSet>
  </fields>
  <fields>
    <fullName>SecondaryEmail__c</fullName>
    <description>EMAIL COPIA CORTESIA</description>
    <externalId>false</externalId>
    <label>Secondary Email</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Email</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ShippingAccountName__c</fullName>
    <externalId>false</externalId>
    <label>Shipping Account Name</label>
    <length>80</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ShippingCity__c</fullName>
    <description>ACR 2.0</description>
    <externalId>false</externalId>
    <label>Shipping City</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ShippingCountry__c</fullName>
    <description>ACR 2.0</description>
    <externalId>false</externalId>
    <label>Shipping Country</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ShippingPostalCode__c</fullName>
    <description>ACR 2.0</description>
    <externalId>false</externalId>
    <label>Shipping Zip/Postal Code</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ShippingState__c</fullName>
    <description>ACR 2.0</description>
    <externalId>false</externalId>
    <label>Shipping State/Province</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>ShippingStreet__c</fullName>
    <description>ACR 2.0</description>
    <externalId>false</externalId>
    <label>Shipping Street</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Specialty__c</fullName>
    <label>Specialty</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <controllingField>Account_Type__c</controllingField>
      <restricted>true</restricted>
      <valueSetDefinition>
        <sorted>true</sorted>
        <value>
          <fullName>Air Force</fullName>
          <default>false</default>
          <label>Air Force</label>
        </value>
        <value>
          <fullName>Army</fullName>
          <default>false</default>
          <label>Army</label>
        </value>
        <value>
          <fullName>B2B/Indirect</fullName>
          <default>false</default>
          <label>B2B/Indirect</label>
        </value>
        <value>
          <fullName>B2C/Direct</fullName>
          <default>false</default>
          <label>B2C/Direct</label>
        </value>
        <value>
          <fullName>Branch</fullName>
          <default>false</default>
          <label>Branch</label>
        </value>
        <value>
          <fullName>Bureau of Indian Affairs</fullName>
          <default>false</default>
          <label>Bureau of Indian Affairs</label>
        </value>
        <value>
          <fullName>Coast Guard</fullName>
          <default>false</default>
          <label>Coast Guard</label>
        </value>
        <value>
          <fullName>Community College</fullName>
          <default>false</default>
          <label>Community College</label>
        </value>
        <value>
          <fullName>Community Dental Health</fullName>
          <default>false</default>
          <label>Community Dental Health</label>
        </value>
        <value>
          <fullName>Competitor</fullName>
          <default>false</default>
          <label>Competitor</label>
        </value>
        <value>
          <fullName>Corporate</fullName>
          <default>false</default>
          <label>Corporate</label>
        </value>
        <value>
          <fullName>Correctional Facility</fullName>
          <default>false</default>
          <label>Correctional Facility</label>
        </value>
        <value>
          <fullName>Country</fullName>
          <default>false</default>
          <label>Country</label>
        </value>
        <value>
          <fullName>Crown &amp; Bridge Laboratory</fullName>
          <default>false</default>
          <label>Crown &amp; Bridge Laboratory</label>
        </value>
        <value>
          <fullName>Dealer Sell Out Data Region</fullName>
          <default>false</default>
          <label>Dealer Sell Out Data Region</label>
        </value>
        <value>
          <fullName>Dental Association</fullName>
          <default>false</default>
          <label>Dental Association</label>
        </value>
        <value>
          <fullName>Dental Clinic</fullName>
          <default>false</default>
          <label>Dental Clinic</label>
        </value>
        <value>
          <fullName>Dental Laboratory</fullName>
          <default>false</default>
          <label>Dental Laboratory</label>
        </value>
        <value>
          <fullName>Dental Office</fullName>
          <default>false</default>
          <label>Dental Office</label>
        </value>
        <value>
          <fullName>Dental School</fullName>
          <default>false</default>
          <label>Dental School</label>
        </value>
        <value>
          <fullName>Dental Specialist</fullName>
          <default>false</default>
          <label>Dental Specialist</label>
        </value>
        <value>
          <fullName>Dental Technician School</fullName>
          <default>false</default>
          <label>Dental Technician School</label>
        </value>
        <value>
          <fullName>Dentsply</fullName>
          <default>false</default>
          <label>Dentsply</label>
        </value>
        <value>
          <fullName>DentsplySirona</fullName>
          <default>false</default>
          <label>DentsplySirona</label>
        </value>
        <value>
          <fullName>Denture Clinic</fullName>
          <default>false</default>
          <label>Denture Clinic</label>
        </value>
        <value>
          <fullName>Denture Laboratory</fullName>
          <default>false</default>
          <label>Denture Laboratory</label>
        </value>
        <value>
          <fullName>Denturists</fullName>
          <default>false</default>
          <label>Denturists</label>
        </value>
        <value>
          <fullName>Digital</fullName>
          <default>false</default>
          <label>Digital</label>
        </value>
        <value>
          <fullName>Discontinued</fullName>
          <default>false</default>
          <label>Discontinued</label>
        </value>
        <value>
          <fullName>Distributor</fullName>
          <default>false</default>
          <label>Distributor</label>
        </value>
        <value>
          <fullName>Distributor branch office</fullName>
          <default>false</default>
          <label>Distributor branch office</label>
        </value>
        <value>
          <fullName>Division</fullName>
          <default>false</default>
          <label>Division</label>
        </value>
        <value>
          <fullName>Domestic</fullName>
          <default>false</default>
          <label>Domestic</label>
        </value>
        <value>
          <fullName>Education Center</fullName>
          <default>false</default>
          <label>Education Center</label>
        </value>
        <value>
          <fullName>Endodontic Resident</fullName>
          <default>false</default>
          <label>Endodontic Resident</label>
        </value>
        <value>
          <fullName>Endodontics</fullName>
          <default>false</default>
          <label>Endodontics</label>
        </value>
        <value>
          <fullName>End User</fullName>
          <default>false</default>
          <label>End User</label>
        </value>
        <value>
          <fullName>Esthetic</fullName>
          <default>false</default>
          <label>Esthetic</label>
        </value>
        <value>
          <fullName>Events</fullName>
          <default>false</default>
          <label>Events</label>
        </value>
        <value>
          <fullName>Export</fullName>
          <default>false</default>
          <label>Export</label>
        </value>
        <value>
          <fullName>Federal Government</fullName>
          <default>false</default>
          <label>Federal Government</label>
        </value>
        <value>
          <fullName>Federal Prison</fullName>
          <default>false</default>
          <label>Federal Prison</label>
        </value>
        <value>
          <fullName>First Letters of Zip/Postal Code</fullName>
          <default>false</default>
          <label>First Letters of Zip/Postal Code</label>
        </value>
        <value>
          <fullName>Fixed Products</fullName>
          <default>false</default>
          <label>Fixed Products</label>
        </value>
        <value>
          <fullName>Franchise</fullName>
          <default>false</default>
          <label>Franchise</label>
        </value>
        <value>
          <fullName>Free Goods</fullName>
          <default>false</default>
          <label>Free Goods</label>
        </value>
        <value>
          <fullName>Full Service</fullName>
          <default>false</default>
          <label>Full Service</label>
        </value>
        <value>
          <fullName>Full Service Dental Laboratory</fullName>
          <default>false</default>
          <label>Full Service Dental Laboratory</label>
        </value>
        <value>
          <fullName>General</fullName>
          <default>false</default>
          <label>General</label>
        </value>
        <value>
          <fullName>General Hospital</fullName>
          <default>false</default>
          <label>General Hospital</label>
        </value>
        <value>
          <fullName>General Practice</fullName>
          <default>false</default>
          <label>General Practice</label>
        </value>
        <value>
          <fullName>General University</fullName>
          <default>false</default>
          <label>General University</label>
        </value>
        <value>
          <fullName>Geographical</fullName>
          <default>false</default>
          <label>Geographical</label>
        </value>
        <value>
          <fullName>Geographical Area</fullName>
          <default>false</default>
          <label>Geographical Area</label>
        </value>
        <value>
          <fullName>Government</fullName>
          <default>false</default>
          <label>Government</label>
        </value>
        <value>
          <fullName>Government Hospital</fullName>
          <default>false</default>
          <label>Government Hospital</label>
        </value>
        <value>
          <fullName>Government - Local</fullName>
          <default>false</default>
          <label>Government - Local</label>
        </value>
        <value>
          <fullName>GP Undergrad</fullName>
          <default>false</default>
          <label>GP Undergrad</label>
        </value>
        <value>
          <fullName>Group</fullName>
          <default>false</default>
          <label>Group</label>
        </value>
        <value>
          <fullName>Headquarter</fullName>
          <default>false</default>
          <label>Headquarter</label>
        </value>
        <value>
          <fullName>Health Clinic</fullName>
          <default>false</default>
          <label>Health Clinic</label>
        </value>
        <value>
          <fullName>Home Address</fullName>
          <default>false</default>
          <label>Home Address</label>
        </value>
        <value>
          <fullName>Hospital</fullName>
          <default>false</default>
          <label>Hospital</label>
        </value>
        <value>
          <fullName>Hospital Laboratory</fullName>
          <default>false</default>
          <label>Hospital Laboratory</label>
        </value>
        <value>
          <fullName>Huge/National Group/Corporation</fullName>
          <default>false</default>
          <label>Huge/National Group/Corporation</label>
        </value>
        <value>
          <fullName>Hygiene School</fullName>
          <default>false</default>
          <label>Hygiene School</label>
        </value>
        <value>
          <fullName>Implants</fullName>
          <default>false</default>
          <label>Implants</label>
        </value>
        <value>
          <fullName>Indian Health</fullName>
          <default>false</default>
          <label>Indian Health</label>
        </value>
        <value>
          <fullName>Industrial</fullName>
          <default>false</default>
          <label>Industrial</label>
        </value>
        <value>
          <fullName>Institution</fullName>
          <default>false</default>
          <label>Institution</label>
        </value>
        <value>
          <fullName>Insurance</fullName>
          <default>false</default>
          <label>Insurance</label>
        </value>
        <value>
          <fullName>Insurance Care Center</fullName>
          <default>false</default>
          <label>Insurance Care Center</label>
        </value>
        <value>
          <fullName>Intercompany</fullName>
          <default>false</default>
          <label>Intercompany</label>
        </value>
        <value>
          <fullName>Internal</fullName>
          <default>false</default>
          <label>Internal</label>
        </value>
        <value>
          <fullName>Internal Sales Rep</fullName>
          <default>false</default>
          <label>Internal Sales Rep</label>
        </value>
        <value>
          <fullName>International</fullName>
          <default>false</default>
          <label>International</label>
        </value>
        <value>
          <fullName>Lab</fullName>
          <default>false</default>
          <label>Lab</label>
        </value>
        <value>
          <fullName>Lab Group</fullName>
          <default>false</default>
          <label>Lab Group</label>
        </value>
        <value>
          <fullName>Large/Regional Group</fullName>
          <default>false</default>
          <label>Large/Regional Group</label>
        </value>
        <value>
          <fullName>Large Group</fullName>
          <default>false</default>
          <label>Large Group</label>
        </value>
        <value>
          <fullName>Local Government</fullName>
          <default>false</default>
          <label>Local Government</label>
        </value>
        <value>
          <fullName>Manufacturer</fullName>
          <default>false</default>
          <label>Manufacturer</label>
        </value>
        <value>
          <fullName>Marines</fullName>
          <default>false</default>
          <label>Marines</label>
        </value>
        <value>
          <fullName>Medical</fullName>
          <default>false</default>
          <label>Medical</label>
        </value>
        <value>
          <fullName>Mid Market Group</fullName>
          <default>false</default>
          <label>Mid Market Group</label>
        </value>
        <value>
          <fullName>Mix of Fixed &amp; Removable Products</fullName>
          <default>false</default>
          <label>Mix of Fixed &amp; Removable Products</label>
        </value>
        <value>
          <fullName>Multi-Dentist Clinic</fullName>
          <default>false</default>
          <label>Multi-Dentist Clinic</label>
        </value>
        <value>
          <fullName>Navy</fullName>
          <default>false</default>
          <label>Navy</label>
        </value>
        <value>
          <fullName>NDC</fullName>
          <default>false</default>
          <label>NDC</label>
        </value>
        <value>
          <fullName>NDC group of distributors</fullName>
          <default>false</default>
          <label>NDC group of distributors</label>
        </value>
        <value>
          <fullName>New</fullName>
          <default>false</default>
          <label>New</label>
        </value>
        <value>
          <fullName>NHS Foundation/Community Trust</fullName>
          <default>false</default>
          <label>NHS Foundation/Community Trust</label>
        </value>
        <value>
          <fullName>Non Dental</fullName>
          <default>false</default>
          <label>Non Dental</label>
        </value>
        <value>
          <fullName>Non-Federal Prison</fullName>
          <default>false</default>
          <label>Non-Federal Prison</label>
        </value>
        <value>
          <fullName>Oral Maxillofacial Surgery</fullName>
          <default>false</default>
          <label>Oral Maxillofacial Surgery</label>
        </value>
        <value>
          <fullName>Ortho (retainers &amp; appliances)</fullName>
          <default>false</default>
          <label>Ortho (retainers &amp; appliances)</label>
        </value>
        <value>
          <fullName>Orthodontics</fullName>
          <default>false</default>
          <label>Orthodontics</label>
        </value>
        <value>
          <fullName>Other</fullName>
          <default>false</default>
          <label>Other</label>
        </value>
        <value>
          <fullName>Other Non-Dental</fullName>
          <default>false</default>
          <label>Other Non-Dental</label>
        </value>
        <value>
          <fullName>Other Oral Treatments</fullName>
          <default>false</default>
          <label>Other Oral Treatments</label>
        </value>
        <value>
          <fullName>Other SBU</fullName>
          <default>false</default>
          <label>Other SBU</label>
        </value>
        <value>
          <fullName>Partner</fullName>
          <default>false</default>
          <label>Partner</label>
        </value>
        <value>
          <fullName>Patient</fullName>
          <default>false</default>
          <label>Patient</label>
        </value>
        <value>
          <fullName>Pedodontics</fullName>
          <default>false</default>
          <label>Pedodontics</label>
        </value>
        <value>
          <fullName>Periodontics</fullName>
          <default>false</default>
          <label>Periodontics</label>
        </value>
        <value>
          <fullName>Pharmacy</fullName>
          <default>false</default>
          <label>Pharmacy</label>
        </value>
        <value>
          <fullName>Preventive</fullName>
          <default>false</default>
          <label>Preventive</label>
        </value>
        <value>
          <fullName>Prison</fullName>
          <default>false</default>
          <label>Prison</label>
        </value>
        <value>
          <fullName>Private Hospital</fullName>
          <default>false</default>
          <label>Private Hospital</label>
        </value>
        <value>
          <fullName>Private Insurance</fullName>
          <default>false</default>
          <label>Private Insurance</label>
        </value>
        <value>
          <fullName>Professor</fullName>
          <default>false</default>
          <label>Professor</label>
        </value>
        <value>
          <fullName>Prosthetic Laboratory</fullName>
          <default>false</default>
          <label>Prosthetic Laboratory</label>
        </value>
        <value>
          <fullName>Prosthodontics</fullName>
          <default>false</default>
          <label>Prosthodontics</label>
        </value>
        <value>
          <fullName>Public Health</fullName>
          <default>false</default>
          <label>Public Health</label>
        </value>
        <value>
          <fullName>Public Insurance</fullName>
          <default>false</default>
          <label>Public Insurance</label>
        </value>
        <value>
          <fullName>Purchasing Group</fullName>
          <default>false</default>
          <label>Purchasing Group</label>
        </value>
        <value>
          <fullName>QC Sales Account</fullName>
          <default>false</default>
          <label>QC Sales Account</label>
        </value>
        <value>
          <fullName>Radiology</fullName>
          <default>false</default>
          <label>Radiology</label>
        </value>
        <value>
          <fullName>Region</fullName>
          <default>false</default>
          <label>Region</label>
        </value>
        <value>
          <fullName>Removable (full &amp; partial dentures)</fullName>
          <default>false</default>
          <label>Removable (full &amp; partial dentures)</label>
        </value>
        <value>
          <fullName>Removable Products</fullName>
          <default>false</default>
          <label>Removable Products</label>
        </value>
        <value>
          <fullName>Residential</fullName>
          <default>false</default>
          <label>Residential</label>
        </value>
        <value>
          <fullName>Sales Rep</fullName>
          <default>false</default>
          <label>Sales Rep</label>
        </value>
        <value>
          <fullName>School Other</fullName>
          <default>false</default>
          <label>School Other</label>
        </value>
        <value>
          <fullName>School - Other</fullName>
          <default>false</default>
          <label>School - Other</label>
        </value>
        <value>
          <fullName>Single Dentist Clinic</fullName>
          <default>false</default>
          <label>Single Dentist Clinic</label>
        </value>
        <value>
          <fullName>Small/Local Group</fullName>
          <default>false</default>
          <label>Small/Local Group</label>
        </value>
        <value>
          <fullName>Small Group</fullName>
          <default>false</default>
          <label>Small Group</label>
        </value>
        <value>
          <fullName>Social Enterprise</fullName>
          <default>false</default>
          <label>Social Enterprise</label>
        </value>
        <value>
          <fullName>Specialist Clinic</fullName>
          <default>false</default>
          <label>Specialist Clinic</label>
        </value>
        <value>
          <fullName>Specialized Hospital</fullName>
          <default>false</default>
          <label>Specialized Hospital</label>
        </value>
        <value>
          <fullName>State Government</fullName>
          <default>false</default>
          <label>State Government</label>
        </value>
        <value>
          <fullName>Stock/Sample Account</fullName>
          <default>false</default>
          <label>Stock/Sample Account</label>
        </value>
        <value>
          <fullName>Student</fullName>
          <default>false</default>
          <label>Student</label>
        </value>
        <value>
          <fullName>Teaching Hospital</fullName>
          <default>false</default>
          <label>Teaching Hospital</label>
        </value>
        <value>
          <fullName>Technical School</fullName>
          <default>false</default>
          <label>Technical School</label>
        </value>
        <value>
          <fullName>Tooth Counter</fullName>
          <default>false</default>
          <label>Tooth Counter</label>
        </value>
        <value>
          <fullName>Undergraduate</fullName>
          <default>false</default>
          <label>Undergraduate</label>
        </value>
        <value>
          <fullName>University</fullName>
          <default>false</default>
          <label>University</label>
        </value>
        <value>
          <fullName>University Department</fullName>
          <default>false</default>
          <label>University Department</label>
        </value>
        <value>
          <fullName>Vendor</fullName>
          <default>false</default>
          <label>Vendor</label>
        </value>
        <value>
          <fullName>Veterans Affairs</fullName>
          <default>false</default>
          <label>Veterans Affairs</label>
        </value>
        <value>
          <fullName>Veterinary</fullName>
          <default>false</default>
          <label>Veterinary</label>
        </value>
        <value>
          <fullName>Wholesaler</fullName>
          <default>false</default>
          <label>Wholesaler</label>
        </value>
        <value>
          <fullName>Zip/Postal Code</fullName>
          <default>false</default>
          <label>Zip/Postal Code</label>
        </value>
      </valueSetDefinition>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Air Force</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Army</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Bureau of Indian Affairs</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Coast Guard</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>Community College</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Competitor</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Correctional Facility</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>Crown &amp; Bridge Laboratory</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Support Organization</controllingFieldValue>
        <valueName>Dental Association</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Dental Clinic</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>General Practice</controllingFieldValue>
        <valueName>Dental Office</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Dental School</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>Dental Technician School</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>Dentsply</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>DentsplySirona</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>Denture Laboratory</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <valueName>Denturists</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>Digital</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Distributor</controllingFieldValue>
        <valueName>Distributor</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>Education Center</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>End User</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <controllingFieldValue>Dental Clinic</controllingFieldValue>
        <valueName>Endodontics</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <valueName>Esthetic</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>Events</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Federal Prison</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>Full Service Dental Laboratory</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>General</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>General Hospital</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Clinic</controllingFieldValue>
        <valueName>General Practice</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Government</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Government - Local</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Support Organization</controllingFieldValue>
        <valueName>Headquarter</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Health Clinic</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Clinic</controllingFieldValue>
        <valueName>Home Address</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Hospital</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>Hospital Laboratory</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>Hygiene School</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Clinic</controllingFieldValue>
        <valueName>Implants</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Industrial</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>Institution</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Insurance</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Insurance Care Center</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>Intercompany</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>Internal</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>Internal Sales Rep</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>General Practice</controllingFieldValue>
        <valueName>International</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <valueName>Lab</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Support Organization</controllingFieldValue>
        <valueName>Lab Group</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Support Organization</controllingFieldValue>
        <valueName>Large Group</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Competitor</controllingFieldValue>
        <valueName>Manufacturer</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Marines</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Medical</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Support Organization</controllingFieldValue>
        <valueName>Mid Market Group</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Navy</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Distributor</controllingFieldValue>
        <valueName>NDC group of distributors</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>NHS Foundation/Community Trust</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Non Dental</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Non-Federal Prison</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <valueName>Oral Maxillofacial Surgery</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>Ortho (retainers &amp; appliances)</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <controllingFieldValue>Dental Clinic</controllingFieldValue>
        <valueName>Orthodontics</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>Other</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>Other Oral Treatments</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Partner</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Patient</controllingFieldValue>
        <valueName>Patient</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <valueName>Pedodontics</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <valueName>Periodontics</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Clinic</controllingFieldValue>
        <valueName>Preventive</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Private Hospital</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>Professor</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <valueName>Prosthodontics</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Public Health</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Support Organization</controllingFieldValue>
        <valueName>Purchasing Group</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>General Practice</controllingFieldValue>
        <valueName>QC Sales Account</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Radiology</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Lab within a Clinic</controllingFieldValue>
        <controllingFieldValue>Dental Laboratory</controllingFieldValue>
        <valueName>Removable (full &amp; partial dentures)</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Residential</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>School Other</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Dental Support Organization</controllingFieldValue>
        <valueName>Small Group</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Social Enterprise</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Internal</controllingFieldValue>
        <valueName>Stock/Sample Account</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>Student</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <controllingFieldValue>Medical</controllingFieldValue>
        <valueName>Teaching Hospital</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <controllingFieldValue>Distributor</controllingFieldValue>
        <valueName>Tooth Counter</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Education</controllingFieldValue>
        <valueName>University</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Government</controllingFieldValue>
        <valueName>Veterans Affairs</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Specialty</controllingFieldValue>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Veterinary</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Non-Dental</controllingFieldValue>
        <valueName>Wholesaler</valueName>
      </valueSettings>
    </valueSet>
  </fields>
  <fields>
    <fullName>StartUpPractice__c</fullName>
    <deleteConstraint>SetNull</deleteConstraint>
    <label>Start Up Practice</label>
    <referenceTo>StartUpPractice__c</referenceTo>
    <relationshipLabel>Account Requests</relationshipLabel>
    <relationshipName>Account_Requests</relationshipName>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Lookup</type>
  </fields>
  <fields>
    <fullName>State_License_Number__c</fullName>
    <description>Used in North America to capture the state license number of a contact, similar to an NPI number</description>
    <externalId>false</externalId>
    <label>State License Number</label>
    <length>30</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>State_Licensure__c</fullName>
    <label>State Licensure</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <controllingField>User_Country__c</controllingField>
      <restricted>true</restricted>
      <valueSetName>States_North_America</valueSetName>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - AB</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - BC</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - MB</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - NB</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - NL</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - NS</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - ON</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - PE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - QC</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>Canada</controllingFieldValue>
        <valueName>Canada - SK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - AA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - AE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - AK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - AL</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - AP</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - AR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - AZ</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - CA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - CO</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - CT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - DC</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - DE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - FL</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - GA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - HI</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - IA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - ID</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - IL</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - IN</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - KS</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - KY</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - LA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - MA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - MD</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - ME</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - MI</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - MN</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - MO</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - MS</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - MT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - NC</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - ND</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - NE</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - NH</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - NJ</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - NM</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - NV</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - NY</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - OH</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - OK</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - OR</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - PA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - RI</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - SC</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - SD</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - TN</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - TX</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - UT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - VA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - VT</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - WA</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - WI</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - WV</valueName>
      </valueSettings>
      <valueSettings>
        <controllingFieldValue>USA</controllingFieldValue>
        <valueName>USA - WY</valueName>
      </valueSettings>
    </valueSet>
  </fields>
  <fields>
    <fullName>State_Province__c</fullName>
    <externalId>false</externalId>
    <label>State/Province</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>Status__c</fullName>
    <label>Status</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <restricted>true</restricted>
      <valueSetDefinition>
        <sorted>false</sorted>
        <value>
          <fullName>Created</fullName>
          <default>true</default>
          <label>Created</label>
        </value>
        <value>
          <fullName>Submitted</fullName>
          <default>false</default>
          <label>Submitted</label>
        </value>
        <value>
          <fullName>Processing</fullName>
          <default>false</default>
          <label>Processing</label>
        </value>
        <value>
          <fullName>Completed</fullName>
          <default>false</default>
          <label>Completed</label>
        </value>
        <value>
          <fullName>Rejected</fullName>
          <default>false</default>
          <label>Rejected</label>
        </value>
      </valueSetDefinition>
    </valueSet>
  </fields>
  <fields>
    <fullName>StreetAddress__c</fullName>
    <externalId>false</externalId>
    <label>Street</label>
    <length>200</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <fields>
    <fullName>SubmitForApproval__c</fullName>
    <defaultValue>true</defaultValue>
    <description>Submits the Change Request for Approval if checked</description>
    <inlineHelpText>Submits the Change Request for Approval if checked</inlineHelpText>
    <label>Submit for Approval</label>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Checkbox</type>
  </fields>
  <fields>
    <fullName>User_Country__c</fullName>
    <defaultValue>CASE($User.User_Country__c,  
"Australia","Australia",
"Austria","Austria",
"Belarus","Belarus",
"Belgium","Belgium",
"Brazil","Brazil",
"Canada", "Canada",
"China","China",
"Denmark","Denmark",
"Finland","Finland",
"France","France",
"Georgia","Georgia",
"Germany","Germany",					
"Holland","Holland",
"Hong Kong","Hong Kong",
"India","India",
"Indonesia","Indonesia",
"Italy","Italy",
"U.A.E","U.A.E",
"Kuwait","Kuwait",
"Egypt","Egypt",
"Jordan","Jordan",
"Algeria","Algeria",
"Tunisia","Tunisia",
"Cameroun","Cameroun",
"Senegal","Senegal",
"Oman","Oman",
"Iran","Iran",
"Iraq","Iraq",
"Libya","Libya",
"Yemen","Yemen",
"Bahrain","Bahrain",
"Mauritius","Mauritius",
"Maldives","Maldives",
"Japan","Japan",
"Kazakhstan","Kazakhstan",
"Lebanon","Lebanon",
"Luxembourg","Luxembourg",
"Malaysia","Malaysia",
"Morocco","Morocco",
"New Zealand","New Zealand",
"Norway","Norway",
"Philippines","Philippines",
"Pakistan","Pakistan",
"Portugal","Portugal",
"Poland","Poland",
"Qatar","Qatar",
"Russia","Russia",
"Saudi Arabia","Saudi Arabia",
"Singapore","Singapore",
"Slovakia","Slovakia",
"South Africa","South Africa",
"South Korea","South Korea",
"Spain","Spain",
"Sweden","Sweden",
"Switzerland","Switzerland",
"Taiwan","Taiwan",
"Thailand","Thailand",
"Turkey","Turkey",
"UAE","UAE",
"UK", "UK",
"Ukraine", "Ukraine",
"USA","USA",
"Vietnam","Vietnam",
"HQ: SE")</defaultValue>
    <label>User Country</label>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Picklist</type>
    <valueSet>
      <restricted>true</restricted>
      <valueSetName>Country_Code_full</valueSetName>
    </valueSet>
  </fields>
  <fields>
    <fullName>YearofGraduation_studentAccts__c</fullName>
    <externalId>false</externalId>
    <label>Year of Graduation (Student Accts)</label>
    <length>255</length>
    <required>false</required>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>false</trackHistory>
    <trackTrending>false</trackTrending>
    <type>Text</type>
    <unique>false</unique>
  </fields>
  <label>Account Request</label>
  <nameField>
    <displayFormat>ACCR - {000000}</displayFormat>
    <label>Account Create/Change Request Name</label>
    <trackFeedHistory>false</trackFeedHistory>
    <trackHistory>true</trackHistory>
    <type>AutoNumber</type>
  </nameField>
  <pluralLabel>Account Requests</pluralLabel>
  <profileSearchLayouts>
    <fields>NAME</fields>
    <fields>Status__c</fields>
    <fields>CREATEDBY_USER</fields>
    <fields>Approval_Status__c</fields>
    <fields>CREATED_DATE</fields>
    <profileName>#Global: Lightning CRM Analyst + Analytics</profileName>
  </profileSearchLayouts>
  <searchLayouts>
    <searchResultsAdditionalFields>Account_Name__c</searchResultsAdditionalFields>
    <searchResultsAdditionalFields>AccountCountry__c</searchResultsAdditionalFields>
    <searchResultsAdditionalFields>Request__c</searchResultsAdditionalFields>
    <searchResultsAdditionalFields>Request_Type__c</searchResultsAdditionalFields>
    <searchResultsAdditionalFields>CREATEDBY_USER</searchResultsAdditionalFields>
    <searchResultsAdditionalFields>CREATED_DATE</searchResultsAdditionalFields>
    <searchResultsAdditionalFields>LAST_UPDATE</searchResultsAdditionalFields>
    <searchResultsAdditionalFields>User_Country__c</searchResultsAdditionalFields>
  </searchLayouts>
  <sharingModel>Private</sharingModel>
  <startsWith>Vowel</startsWith>
  <validationRules>
    <fullName>AccountChangeRequestRequiresAnAccount</fullName>
    <active>true</active>
    <description>When creating an account change request, the users must select an existing account. 
(Mainly to mitigate issues with the mobile version)</description>
    <errorConditionFormula>AND(
TEXT(Request__c) = 'Account Change Request', 
Existing_Account__c = null)</errorConditionFormula>
    <errorDisplayField>Existing_Account__c</errorDisplayField>
    <errorMessage>You must select an existing account when requesting an account change.</errorMessage>
  </validationRules>
  <validationRules>
    <fullName>ALL_NewAccountRequestRequiredFields</fullName>
    <active>true</active>
    <description>Creating a new Account request from a mobile device uses the regular page layout but we cannot enforce Field Requiredness because the same page layout is used to edit Account Change Requests on Mobile device - na to Browser -&gt; Dynamic forms</description>
    <errorConditionFormula>AND(
TEXT(Request__c) = 'Account Creation Request',
TEXT(Status__c) &lt;&gt; 'Processing', 
TEXT(Status__c) &lt;&gt; 'Completed', 
TEXT(Status__c) &lt;&gt; 'Rejected', 
OR(
Account_Name__c = null, 
TEXT(Account_Type__c) = null, 
StreetAddress__c = null, 
City__c = null,
Postal_Zip_Code__c = null,
Country__c = null,
TEXT(AccountCountry__c) = null
)
)</errorConditionFormula>
    <errorMessage>The following fields are required when requesting a new account:
- Account Name, 
- Specialty 
- Account Address (Street, City, Zip, Country and Country Code)</errorMessage>
  </validationRules>
  <validationRules>
    <fullName>FrenchNewAccountRequestRequiredOrgN</fullName>
    <active>true</active>
    <description>For France only : require Orgnaisation Number only for Type = "Create New Account"</description>
    <errorConditionFormula>AND(
OrganisationNumber__c  = null,
TEXT(Request_Type__c)='Create New Account',
TEXT(User_Country__c)='France'
)</errorConditionFormula>
    <errorDisplayField>OrganisationNumber__c</errorDisplayField>
    <errorMessage>Le n.de l'organisation est obligatoire. (SIRET)</errorMessage>
  </validationRules>
  <validationRules>
    <fullName>FrenchNewAccountRequestRequiredPhone</fullName>
    <active>true</active>
    <description>For France only : require Phone Number only for Type = "Create New Account"</description>
    <errorConditionFormula>AND(
Account_Phone_Number__c  = null,
TEXT(Request_Type__c)='Create New Account',
TEXT(User_Country__c)='France'
)</errorConditionFormula>
    <errorDisplayField>Account_Phone_Number__c</errorDisplayField>
    <errorMessage>Le numéro de téléphone est obligatoire.</errorMessage>
  </validationRules>
  <validationRules>
    <fullName>ItalyNewAccountRequestRequiredOrgN</fullName>
    <active>true</active>
    <description>For Italy only: require Organization number only for Type = "Create New Account"</description>
    <errorConditionFormula>AND(
Lead__c = null,
LEN(OrganisationNumber__c) &lt;&gt; 11,
LEN(OrganisationNumber__c) &lt;&gt; 16,
TEXT(Request_Type__c)='Create New Account',
TEXT(User_Country__c)='Italy'
)</errorConditionFormula>
    <errorDisplayField>OrganisationNumber__c</errorDisplayField>
    <errorMessage>Si prega di inserire Partita iva</errorMessage>
  </validationRules>
  <validationRules>
    <fullName>ItalyNewAccountRequestRequiredState</fullName>
    <active>true</active>
    <description>For Italy only: require state/province only for Type = "Create New Account"</description>
    <errorConditionFormula>AND(
State_Province__c = null,
TEXT(Request_Type__c)='Create New Account',
TEXT(User_Country__c)='Italy'
)</errorConditionFormula>
    <errorDisplayField>State_Province__c</errorDisplayField>
    <errorMessage>Si prega di inserire Provincia</errorMessage>
  </validationRules>
  <validationRules>
    <fullName>ItalyNewCreationRequestRequiredOrgN</fullName>
    <active>true</active>
    <description>For Italy only: require Organization number only for Type = "Account Info Change"</description>
    <errorConditionFormula>AND(
LEN(OrganisationNumber__c) &lt;&gt; 11,
LEN(OrganisationNumber__c) &lt;&gt; 16,
TEXT(Request_Type__c)='Account Info Change',
TEXT(User_Country__c)='Italy',
NOT(ISBLANK(OrganisationNumber__c))
)</errorConditionFormula>
    <errorDisplayField>OrganisationNumber__c</errorDisplayField>
    <errorMessage>Si prega di inserire Partita iva correcta</errorMessage>
  </validationRules>
  <validationRules>
    <fullName>ItalyReqDestinationCodeOrCertifiedEmail</fullName>
    <active>true</active>
    <description>One of these 2 fields has to be always filled.</description>
    <errorConditionFormula>AND(
Lead__c = null,
DestinationCode__c = null, 
CertifiedEmail__c = null,
TEXT(Request_Type__c)='Create New ERP Account',
TEXT(User_Country__c)='Italy'
)</errorConditionFormula>
    <errorDisplayField>DestinationCode__c</errorDisplayField>
    <errorMessage>To request a new account, you must enter a destination code or a Certified Email value.</errorMessage>
  </validationRules>
  <validationRules>
    <fullName>NA_AccountRequestsNotAllowed</fullName>
    <active>true</active>
    <description>USA/CA are not allowed to create new Account Requests</description>
    <errorConditionFormula>AND (
 ISNEW(), 
 OR(
    TEXT(AccountCountry__c)='US', 
    TEXT(AccountCountry__c)='CA',
    TEXT(Existing_Account__r.Country__c)='US',
    TEXT(Existing_Account__r.Country__c)='CA',
    TEXT($User.User_Country__c)='USA',
    TEXT($User.User_Country__c)='Canada'
 )
)</errorConditionFormula>
    <errorMessage>For North American account requests, please use this link: https://dentsplysirona.sharepoint.com/sites/NAAccountMaintenance</errorMessage>
  </validationRules>
  <visibility>Public</visibility>
  <webLinks>
    <fullName>Create_New_Account</fullName>
    <availability>online</availability>
    <description>For the Customer Master Team to Create a New Account from a new account request form.</description>
    <displayType>button</displayType>
    <encodingKey>UTF-8</encodingKey>
    <hasMenubar>false</hasMenubar>
    <hasScrollbars>true</hasScrollbars>
    <hasToolbar>false</hasToolbar>
    <height>600</height>
    <isResizable>true</isResizable>
    <linkType>url</linkType>
    <masterLabel>Create New Account</masterLabel>
    <openType>newWindow</openType>
    <position>none</position>
    <protected>false</protected>
    <showsLocation>false</showsLocation>
    <showsStatus>false</showsStatus>
    <url>/001/e?retURL=%2F001%2Fo&amp;RecordType=0120J000000cmcy&amp;ent=Account&amp;nooverride=1&amp;00N20000001MC0l=USA&amp;
acc2={!Account_Create_Change_Request__c.Account_Name__c}&amp;
acc18street={!Account_Create_Change_Request__c.StreetAddress__c}&amp;
acc18city={!Account_Create_Change_Request__c.City__c}&amp;
acc18state={!Account_Create_Change_Request__c.State_Province__c}&amp;
acc18zip={!Account_Create_Change_Request__c.Postal_Zip_Code__c}&amp;acc10={!Account_Create_Change_Request__c.Account_Phone_Number__c}</url>
  </webLinks>
</CustomObject>


`,
  extensions: [
    gitConflicts(),
    basicSetup,
    lineNumbers(),
    xml()
  ],
  parent: document.body
})
