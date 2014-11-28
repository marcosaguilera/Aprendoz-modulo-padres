
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.BusDriver
 *  11/28/2014 10:15:14
 * 
 */
public class BusDriver {

    private Integer id;
    private String name;
    private String lastName;
    private String identification;
    private String rh;
    private String arp;
    private String eps;
    private Set<com.aprendoz_desarrollo.data.BusPhone> busPhones = new HashSet<com.aprendoz_desarrollo.data.BusPhone>();
    private Set<com.aprendoz_desarrollo.data.BusRoute> busRoutes = new HashSet<com.aprendoz_desarrollo.data.BusRoute>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getRh() {
        return rh;
    }

    public void setRh(String rh) {
        this.rh = rh;
    }

    public String getArp() {
        return arp;
    }

    public void setArp(String arp) {
        this.arp = arp;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public Set<com.aprendoz_desarrollo.data.BusPhone> getBusPhones() {
        return busPhones;
    }

    public void setBusPhones(Set<com.aprendoz_desarrollo.data.BusPhone> busPhones) {
        this.busPhones = busPhones;
    }

    public Set<com.aprendoz_desarrollo.data.BusRoute> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(Set<com.aprendoz_desarrollo.data.BusRoute> busRoutes) {
        this.busRoutes = busRoutes;
    }

}
