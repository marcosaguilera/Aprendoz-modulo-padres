
package com.aprendoz_desarrollo.data;

import java.util.Date;


/**
 *  aprendoz_desarrollo.BisEventlog
 *  10/08/2014 08:54:33
 * 
 */
public class BisEventlog {

    private String id;
    private Date eventCreationTime;
    private String addressTag;
    private String stateName;
    private String stringValue;
    private String eventValueName;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getEventCreationTime() {
        return eventCreationTime;
    }

    public void setEventCreationTime(Date eventCreationTime) {
        this.eventCreationTime = eventCreationTime;
    }

    public String getAddressTag() {
        return addressTag;
    }

    public void setAddressTag(String addressTag) {
        this.addressTag = addressTag;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public String getStringValue() {
        return stringValue;
    }

    public void setStringValue(String stringValue) {
        this.stringValue = stringValue;
    }

    public String getEventValueName() {
        return eventValueName;
    }

    public void setEventValueName(String eventValueName) {
        this.eventValueName = eventValueName;
    }

}
