
package com.aprendoz_desarrollo.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_desarrollo.BusBus
 *  09/25/2014 15:43:06
 * 
 */
public class BusBus {

    private Integer id;
    private String plate;
    private Set<com.aprendoz_desarrollo.data.BusRoute> busRoutes = new HashSet<com.aprendoz_desarrollo.data.BusRoute>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate;
    }

    public Set<com.aprendoz_desarrollo.data.BusRoute> getBusRoutes() {
        return busRoutes;
    }

    public void setBusRoutes(Set<com.aprendoz_desarrollo.data.BusRoute> busRoutes) {
        this.busRoutes = busRoutes;
    }

}
